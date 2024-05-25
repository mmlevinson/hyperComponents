import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/famousSpeeches.json?json'

const tw = {
	tr: 'cursor-pointer even:hover:bg-blue-900 odd:hover:bg-blue-950 ' + 
	'even:hover:text-amber-500 odd:hover:text-amber-500'
}


const getSpeechData = () => {

 const markup = famousSpeeches.map((speech)=>{
		return  `
		<tr 
			index="${speech.id}" 
			class="${tw.tr}" 
			script="
				on click 
					fetch /api/speeches/${speech.id} as text then 
					put it into the #{'speech-title'}
					fetch /api/speeches/${speech.id}?transcript=true as html then 
					put it into the #{'speech-transcript'}
					tell #{'searchbox'} set @searchPath to '/api/speeches/${speech.id}?match=true'
					log #{'searchbox'}'s @searchPath
					--  @searchPath of #{'searchbox'} to '/api/speeches/${speech.id}?match=true'
					-- put [@searchPath='/api/speeches/${speech.id}?match=true'] into #{'searchbox'} 
				"
		>	
		<td>${speech.speaker}</td>
		<td>${speech.title}</td>
		<td>${speech.date}</td>
	</tr>
	`
 })

 return markup.join('\n')

}

export const GET = async ({params, request}) => {
	return new Response (getSpeechData(), {status: 200})
	
	
}

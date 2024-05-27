import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/famousSpeeches.json?json'

export const tw = {
	tr: 'cursor-pointer font-semibold ' + 
	'even:hover:bg-amber-300/50 odd:hover:bg-amber-400/30 ' + 
	'even:hover:text-blue-800 odd:hover:text-blue-800 ' +
	'even:hover:dark:bg-indigo-950/60 odd:hover:dark:bg-indigo-950 ' + 
	'even:hover:dark:text-amber-400 odd:hover:dark:text-amber-400',
	rowHilight: 'text-amber-500'
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
					set the value of #{'speech-index'} to the ${speech.id}
					remove .${tw.rowHilight} from <tr/> 
					add .${tw.rowHilight} to me
					go to the  #{'searchbox'} smoothly then settle then 
					call #{'searchbox'}.focus()
				end

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

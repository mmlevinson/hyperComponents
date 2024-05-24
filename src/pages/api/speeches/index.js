import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/famousSpeeches.json?json'

const tw = {
	tr: 'cursor pointer hover:bg-blue-300'
}

const hs = {
	trigger: `on click put my @index into the next <output/>`,
	change: `on change put my value into next <output/>`
}

const getSpeechData = () => {

 const markup = famousSpeeches.map((speech)=>{
		return  `
		<tr index="${speech.id}" script="${hs.trigger}" class=${tw.tr}>
		<td>${speech.speaker}</td>
		<td>${speech.title}</td>
		<td>${speech.date}</td>
	</tr>
	`
 })

 return markup.join('\n')

}

export const GET = async ({params, request}) => {
	console.log(`request.search`, request)
	return new Response (getSpeechData(), {status: 200})
	
	
}

import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/famousSpeeches.json?json'

const getSpeechData = () => {

 const markup = famousSpeeches.map((speech)=>{
		return  `
		<tr>
		<td><input type="radio" name="id" value="${speech.id}"></td>
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

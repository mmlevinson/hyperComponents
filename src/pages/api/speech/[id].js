import { twMerge } from 'tailwind-merge';
import speeches from '../../../data/speeches.json?json'
// import {tw as formStyles} from '../../testform.astro'
const jsonPlaceholder  = import.meta.env.JSONPLACEHOLDER_API_PATH
// const famousSpeeches = 'https://my-json-server.typicode.com/mmlevinson/hyperComponents/'
const famousSpeechesAPI = jsonPlaceholder + 'speeches'

// const tw = {...formStyles}

const getMarkup = (speech) => {

 return  `
 <tr>
	<td><input type="radio" name="id" value="${speech.id}"></td>
	<td>${speech.speaker}</td>
	<td>${speech.title}</td>
	<td>${speech.date}</td>
</tr>
`

}

export const GET = async ({params, request}) => {
	const speechId = params.id
	console.log(`speechId`, speechId)
	console.log(`request`, request)
	const famousSpeech = await fetch(`${famousSpeechesAPI}/${speechId}`).then(response => response.json())
	return new Response (getMarkup(famousSpeech), {status: 200})
	
	
}

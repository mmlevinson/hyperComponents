import { twMerge } from 'tailwind-merge';
import speeches from '../../../data/speeches.json?json'
// import {tw as formStyles} from '../../testform.astro'
const jsonPlaceholder  = import.meta.env.JSONPLACEHOLDER_API_PATH
// const famousSpeeches = 'https://my-json-server.typicode.com/mmlevinson/hyperComponents/'
const famousSpeechesAPI = jsonPlaceholder + 'speech'

// const tw = {...formStyles}

const getMarkup = (speeches) => {

 const markup = speeches.map((speech)=>{
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
  console.log(`speech0`, speeches[0])
	return new Response ('success', {status: 200})
	
	
}

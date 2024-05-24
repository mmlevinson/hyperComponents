import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/speeches.json?json'
// import {tw as formStyles} from '../../testform.astro'


// const tw = {...formStyles}

const getMarkup = () => {

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
	return new Response (getMarkup(), {status: 200})
	
	
}

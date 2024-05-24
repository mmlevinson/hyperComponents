import { twMerge } from 'tailwind-merge';
import famousSpeeches from '../../../data/famousSpeeches.json?json'

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
	return new Response (getMarkup(famousSpeeches[params.id]), {status: 200})
	
	
}

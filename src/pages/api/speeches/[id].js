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

// export const GET = async ({params, request}) => {
// 	console.log(`params`, params)
// 	console.log(`request`, request.searchParams)
// 	return new Response (getMarkup(famousSpeeches[params.id]), {status: 200})
	
	
// }



export async function GET({ params, url }) {
	// Load the speeches data
	


	// Extract the query parameters
	const speechID = +params.id
	const searchParams = url.searchParams;
	const transcriptOnly = searchParams.get('transcript') === 'true';
	// Find the speech by ID
	// const speech = famousSpeeches.find(s => s.id === parseInt(params.id));
	const speech = famousSpeeches[speechID]
	// if (!speech) {
	//     return json({ error: 'Speech not found' }, { status: 404 });
	// }

	// Return only the transcript if requested
	if (transcriptOnly) {
		return new Response(speech.transcript, {status: 200})
	}

	// Otherwise, return the full speech data
	// return new Response(speech.transcript, {status: 200})
}

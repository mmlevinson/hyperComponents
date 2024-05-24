import famousSpeeches from '../../../data/famousSpeeches.json?json'

import { twMerge } from 'tailwind-merge';
// const tw = {...formStyles}

const speechInfo = (speech) => {
 return  `
 <tr>
	<td><input type="radio" name="id" value="${speech.id}"></td>
	<td>${speech.speaker}</td>
	<td>${speech.title}</td>
	<td>${speech.date}</td>
</tr>
`
}

//GET
export async function GET({ params, url }) {
	const speechID = +params.id
	const speech = famousSpeeches[speechID]
	if (!speech) {
	    return new Response ('Speech not found')
	}
	//What is being requested?
	const searchParams = url.searchParams;
	const transcriptOnly = searchParams.get('transcript') === 'true';
	if (transcriptOnly) {
		return new Response(speech.transcript, {status: 200})
	}
	else {
		return new Response (speechInfo(speech), {status: 200})
	}

}

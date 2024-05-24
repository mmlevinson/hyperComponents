import famousSpeeches from '../../../data/famousSpeeches.json?json'

import { twMerge } from 'tailwind-merge';
// const tw = {...formStyles}

const tw = {
	p: 'pb-8 text-sm text-blue-200 dark:text-blue-400 '
}

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
		let markup = `<p class="${tw.p}">` + speech.transcript + '</p>'
		markup = markup.replace(/\\n/g, `</p><p class="${tw.p}">`);
		return new Response(markup, {status: 200})
	}
	else {
		return new Response (speechInfo(speech), {status: 200})
	}

}

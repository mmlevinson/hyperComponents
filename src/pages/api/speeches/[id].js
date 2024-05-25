import famousSpeeches from '../../../data/famousSpeeches.json?json'

import { twMerge } from 'tailwind-merge';
// const tw = {...formStyles}

const tw = {
	p: 'pb-8 text-md lg:text-lg text-gray-800 dark:text-neutral-100 '
}

const speechInfo = (speech) => {
 return  speech.title + ' by ' + speech.speaker + ' on ' + speech.date
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
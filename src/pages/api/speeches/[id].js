import famousSpeeches from '../../../data/famousSpeeches.json?json'

export const tw = {
	p: 'pb-6 text-md lg:text-lg text-gray-800 dark:text-neutral-100 '
}

const speechInfo = (speech) => {
 return  speech.title + ' by ' + speech.speaker + ' on ' + speech.date
}

export function swapLineEndings(text) {
	//add a beginning and ending <p> tag
	let markup = `<p class="${tw.p}">` + text + '</p>'
	//then replace all \\n with <p> tags with appropriate styling
	markup = markup.replace(/\\n/g, `</p><p class="${tw.p}">`);
	return markup;
}

//GET
export async function GET({ params, url }) {
	const speechID = parseInt(params.id)
	const speech = famousSpeeches[speechID]
	if (!speech) {
	    return new Response ('Speech not found')
	}
	//What is being requested?
	const searchParams = url.searchParams;
	const transcriptOnly = searchParams.get('transcript') === 'true';
	if (transcriptOnly) {
		return new Response(swapLineEndings(speech.transcript), {status: 200})
	}
	else {
		return new Response (speechInfo(speech), {status: 200})
	}

}

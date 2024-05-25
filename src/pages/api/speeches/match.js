import famousSpeeches from '../../../data/famousSpeeches.json?json'
import {tw as baseStyles} from './[id]'

const tw = {
	...baseStyles,
  mark: 'bg-rose-200'
}

function markupSpeech(speech, searchString) {
	let markup = `<p class="${tw.p}">` + speech.transcript + '</p>'
	markup = markup.replace(/\\n/g, `</p><p class="${tw.p}">`);

	// Correctly create a RegExp object with dynamic searchString
	const searchRegex = new RegExp(searchString, 'g');
	markup = markup.replace(searchRegex, `<mark class="${tw.mark}">${searchString}</mark>`);

	return markup
}

export const POST = async ({request}) => {
    // Extracting data from the request body
    const data = await request.text()
		//data = searchString=hello&speechId=1
		const searchString = data.split('&')[0].split('=')[1]
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
    
   if (!searchString) {
			return new Response (speech.transcript);
   }
	return new Response(markupSpeech(speech, searchString), {status: 200});
}


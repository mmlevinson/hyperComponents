import famousSpeeches from '../../../data/famousSpeeches.json?json'
import {swapLineEndings, tw as baseStyles} from './[id]'

const tw = {
	...baseStyles,
  mark: 'bg-yellow-200'
}

function markupSpeech(speech, searchString) {
	let markup = swapLineEndings(speech.transcript)

	if (searchString === '') {
		return markup
	}

	// Correctly create a RegExp object with dynamic searchString
	const searchRegex = new RegExp(searchString, 'g');
	markup = markup.replace(searchRegex, `<mark class="${tw.mark}">${searchString}</mark>`);

	return markup
}

export const POST = async ({request}) => {
    // Extracting data from the request body
    const data = await request.text()
		console.log(`data`, data)
		//data = searchString=hello&speechId=1
		const searchString = data.split('&')[0].split('=')[1]
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
  
	return new Response(markupSpeech(speech, searchString), {status: 200});
}


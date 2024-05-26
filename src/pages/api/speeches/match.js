import famousSpeeches from '../../../data/famousSpeeches.json?json'
import {swapLineEndings, tw as baseStyles} from './[id]'

const tw = {
	...baseStyles,
  mark: 'bg-yellow-200'
}

function markupSpeech(speech, searchString, searchCriteria) {
	if (searchString === '') {
		return swapLineEndings(speech.transcript)
	}
   
	let regex = searchString
	let modifiers = 'g'

	switch (searchCriteria) {
		case 'case-sensitive' :
			modifiers = 'g'	
			break
		case 'case-insensitive' :
			modifiers = 'gi'
			break
		case 'whole-word' :
			regex = '\\b' + searchString + '\\b'
			break
		case 'partial-word' :
			regex = '.*' + searchString + '.*'
			break
		case 'multiple-words' :
			break
		case 'begins-with' :
			regex = searchString + '.*\\w'
			break
		case 'ends-with' :
			regex = '\\b.*' + searchString
			break
		case 'contains':
			regex = searchString
				break
	}

	// Correctly create a RegExp object with dynamic searchString
	const searchRegex = new RegExp(regex, modifiers)
  let markup = speech.transcript
	markup = markup.replace(searchRegex, `<mark class="${tw.mark}">$&</mark>`);
	markup = swapLineEndings(markup)
	return markup
}

export const POST = async ({request}) => {
    // Extracting data from the request body
    const data = await request.text()
		console.log(`data`, data)
		//data = searchString=hello&speechId=1
		const searchString = decodeURIComponent(data.split('&')[0].split('=')[1])
			.toLowerCase()
			.replace(' ', '-')
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		const searchCriteria = decodeURIComponent(data.split('&')[2].split('=')[1])
			.toLowerCase()
			.replace(' ', '-')
		console.log(`searchString`, searchString)
		console.log(`searchCriteria`, searchCriteria)

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
  
	return new Response(markupSpeech(speech, searchString, searchCriteria), {status: 200});
}


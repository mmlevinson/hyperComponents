import famousSpeeches from '../../../data/famousSpeeches.json?json'
import {swapLineEndings, tw as baseStyles} from './[id]'

const tw = {
	...baseStyles,
  mark: 'bg-yellow-200'
}

function markupSpeech(speech, searchString, searchCriteria) {
	let markup = swapLineEndings(speech.transcript)

	if (searchString === '') {
		return markup
	}
   
	let regex = searchString
	let modifiers = 'g'

	switch (searchCriteria) {
		case 'Case Sensitive' :
			modifiers = 'g'	
			break
		case 'Case%20Insensitive' :
			modifiers = 'gi'
			break
		case 'Whole Word' :
			regex = '\\b' + searchString + '\\b'
			break
		case 'Partial Word' :
			regex = '.*' + searchString + '.*'
			break
		case 'Multiple Words' :
			break
		case 'Begins With' :
			regex = searchString + '.*'
			break
		case 'Ends With' :
			regex = '.*' + searchString
			break
		case 'Contains':
			regex = searchString
				break
	}

	// Correctly create a RegExp object with dynamic searchString
	const searchRegex = new RegExp(regex, modifiers);
	markup = markup.replace(searchRegex, `<mark class="${tw.mark}">$&</mark>`);

	return markup
}

export const POST = async ({request}) => {
    // Extracting data from the request body
    const data = await request.text()
		console.log(`data`, data)
		//data = searchString=hello&speechId=1
		const searchString = data.split('&')[0].split('=')[1]
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		const searchCriteria = data.split('&')[2].split('=')[1]
		

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
  
	return new Response(markupSpeech(speech, searchString, searchCriteria), {status: 200});
}


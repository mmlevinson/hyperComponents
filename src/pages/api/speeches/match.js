import famousSpeeches from '../../../data/famousSpeeches.json?json'
import {swapLineEndings, tw as baseStyles} from './[id]'
import {defaultBackgroundColors} from '../../../components/search/searchbox.astro'

let hilightColor = defaultBackgroundColors

const tw = {
	...baseStyles,
}

function markupSpeech(speech, searchString, searchCriteria) {
	if (searchString === '') {
		return swapLineEndings(speech.transcript)
	}
   
	let regex = '\\b' + searchString + '\\w*\\b'
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
		case 'begins-with' :
			regex = '\\b' + searchString + '\\w*\\b'
			break
		case 'ends-with' :
			regex = '\\b\\w*' + searchString + '\\b'
			break
		case 'contains':
			regex = searchString
			break
	}

	/* Use regex to find matches which are then wrapped with <mark> tags including
     a Tailwind class for the hilight color 		*/
	const searchRegex = new RegExp(regex, modifiers)
  let markup = speech.transcript
	markup = markup.replace(searchRegex, `<mark class="${hilightColor}">$&</mark>`);
	markup = swapLineEndings(markup)
	return markup
}

export const POST = async ({request}) => {
    // Extract data from the request.text()
		//data = data search=xyz&speech-index=15&search-criteria=Contains&hilight-color=bg-yellow-200
    const data = await request.text()
		// console.log(`data`, data)
		const searchString = decodeURIComponent(data.split('&')[0].split('=')[1])
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		const searchCriteria = decodeURIComponent(data.split('&')[2].split('=')[1])
			.toLowerCase()
			.replace(' ', '-')
		hilightColor = data.split('&')[3].split('=')[1]
		// console.log(`searchString`, searchString)
		// console.log(`searchCriteria`, searchCriteria)
		// console.log(`hilightColor`, hilightColor)

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
  
	return new Response(markupSpeech(speech, searchString, searchCriteria), {status: 200});
}


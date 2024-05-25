import famousSpeeches from '../../../data/famousSpeeches.json?json'

export const POST = async ({url, params, request}) => {
  
    // Extracting data from the request body
    const data = await request.text()
		const searchString = data.split('&')[0].split('=')[1]
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		

		//now get the transcript
		const speech = famousSpeeches[speechId]
		if (!speech) {
				return new Response ('Speech not found')
		}
    


    return new Response(`speechID: ${speechId}, searchString: ${searchString} <br> ${speech.transcript}`, {status: 200});
}


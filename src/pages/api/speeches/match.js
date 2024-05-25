

export const POST = async ({url, params, request}) => {
  
    // Extracting data from the request body
    const data = await request.text()
		const searchString = data.split('&')[0].split('=')[1]
		const speechId = parseInt(data.split('&')[1].split('=')[1])
		console.log(`speechId, searchString`, speechId, searchString)
    
    return new Response(`speechID: ${speechId}, searchString: ${searchString}`, {status: 200});
}


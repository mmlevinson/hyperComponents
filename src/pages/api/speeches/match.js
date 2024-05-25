

export const POST = async ({url, params, request}) => {
  
    // Extracting data from the request body
    const data = await request.text();
    console.log(`data`, data);
		const id = url.searchParams.get('id')
		console.log(`id`, id)
    
    return new Response('OK', {status: 200});
}


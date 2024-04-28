export const GET = ({params, request}) => {
	console.log(`Got request: ${request}`)
	return new Response('Hello from api')
}


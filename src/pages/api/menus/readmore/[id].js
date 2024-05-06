
const tw = {
	p:'text-md font-semibold leading-7 py-3'
}
//GET route
export const GET = async ({params, request}) => {
	
	const idx = params.id
	const markup = fragments[idx]
	const formattedMarkup = markup.replace(/<p>/g, `<p class="${tw.p}">`)
	return new Response(formattedMarkup)
};

const fragments = [
  '<p>ReadMore - body contents 1</p>',
  '<p>ReadMore - body contents 2</p>',
  '<p>ReadMore - body contents 3</p>',
  '<p>ReadMore - body contents 4</p>',
  '<p>ReadMore - body contents 5</p>',
]


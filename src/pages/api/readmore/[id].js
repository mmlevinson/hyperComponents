
const tw = {
	p:'text-md leading-7 py-2'
}

import example0 from '../../../fragments/readmore/example-0.html?raw'
import example1 from '../../../fragments/readmore/example-1.html?raw'
import example2 from '../../../fragments/readmore/example-2.html?raw'
import example3 from '../../../fragments/readmore/example-3.html?raw'
import example4 from '../../../fragments/readmore/example-4.html?raw'


const fragments = [
  example0,
  example1,
  example2,
  example3,
  example4,
]
//GET route
export const GET = async ({params, request}) => {
	const idx = params.id
	const markup = fragments[idx]
	const formattedMarkup = markup.replace(/<p>/g, `<p class="${tw.p}">`)
	return new Response(formattedMarkup)
};




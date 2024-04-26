import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'hyperComponents',
			social: {
				github: 'https://github.com/mmlevinson/hyperComponents',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Background', link: '/about/background/' },
						{ label: 'Why hyperComponents', link: '/about/why/' }, 
						{ label: 'Requirements', link: '/about/requirements/' }, 
						{ label: 'Disclaimers', link: '/about/disclaimers/' }, 
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

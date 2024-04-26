import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'hyperComponents',
		description: 'HyperScript, HTMX, Web Component Library, Tailwind CSS',
    social: {
      github: 'https://github.com/mmlevinson/hyperComponents'
    },
		head: [
			{
				tag: 'script',
				attrs:{
					src: 'https://unpkg.com/hyperscript.org@0.9.12',
					defer: true
				} 
			},
			{
				tag: 'script',
				attrs:{
					src: 'https://unpkg.com/htmx.org@1.9.12',
					integrity: "sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2",
					crossorigin: "anonymous",
					defer: true
				} 
			},
		],
    sidebar: [{
      label: 'Getting Started',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Background',
        link: '/about/background/'
      }, {
        label: 'Why hyperComponents',
        link: '/about/why/'
      }, {
        label: 'Requirements',
        link: '/about/requirements/'
      }, {
        label: 'Tailwind Issues',
        link: '/about/tailwind/'
      }, {
        label: 'Disclaimers',
        link: '/about/disclaimers/'
      }]
    }, {
      label: 'Components',
      autogenerate: {
        directory: 'components'
      }
    }]
  }), tailwind()]
});
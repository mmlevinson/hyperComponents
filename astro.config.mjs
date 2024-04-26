import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'hyperComponents',
    social: {
      github: 'https://github.com/mmlevinson/hyperComponents'
    },
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
        label: 'Tailwind Opinions',
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
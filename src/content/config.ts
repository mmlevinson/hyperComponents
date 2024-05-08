import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
		author:z.string(),
  }),
});


export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	blog: blogCollection,
};

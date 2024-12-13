import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),	
// Type-check frontmatter using a schema
schema: ({ image }) => z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: image(),
	imageAlt: z.string().optional(),
		// imageAlt: z.string().optional(),
	}),
});

//    This key should match the collection directory name in "src/content" e.g.   'blog': blogCollection
export const collections = { blog };

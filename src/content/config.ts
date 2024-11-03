import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
		imageAlt: z.string().optional(),
		// try to .refine((img) => img.width > 1000, { message: 'Image must be wider than 1000px' }),
	}),
});

//    This key should match the collection directory name in "src/content" e.g.   'blog': blogCollection
export const collections = { blog };

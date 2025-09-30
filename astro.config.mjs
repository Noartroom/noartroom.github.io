import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	image: {
		responsiveStyles: true,
		layout: 'constrained',
	},
	experimental: {
		headingIdCompat: true,
	  },
	/* site: 'https://noartroom.github.io/blog', */
	site: 'https://noartroom.github.io/',
	/* trailingSlash: 'ignore', */
/* 	trailingSlash: 'never',
 */	/* base: '/blog',  */
 
	integrations: [sitemap()]
});

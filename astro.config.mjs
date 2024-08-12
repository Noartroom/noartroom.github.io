import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://noartroom.github.io',
	base: '/blog',
	integrations: [sitemap()]
});

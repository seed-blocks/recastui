import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
	site: 'https://recastui.com',
	adapter: vercel({
		analytics: true,
	}),
	integrations: [
		tailwind(),
		react(),
		mdx(),
		sitemap(),
		prefetch(),
		robotsTxt(),
		webmanifest({
			/**
			 * required
			 **/
			name: 'Recastui',

			/**
			 * optional
			 **/
			icon: '/favicon.svg', // source for favicon & icons

			short_name: 'App',
			description:
				'Recastui is a UI toolkit that enables the development of accessible web applications and design systems using React(soon Solidjs, Svelte and others). It includes a collection of themeable UI components and primitives that can serve as a solid foundation for implementing design systems.',
			start_url: '/',
			theme_color: '#ffffff',
			background_color: '#ffffff',
			display: 'standalone',
		}),
	],
});

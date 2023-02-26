import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
	site: 'https://recastui.com',
	integrations: [tailwind(), react(), mdx(), sitemap(), prefetch()],
	adapter: vercel({
    analytics: true
  })
});

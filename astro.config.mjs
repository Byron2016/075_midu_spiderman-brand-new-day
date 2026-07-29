// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.spidermanbrandnewday.es',
  // Server output so Cloudflare ships a Worker (needed for apex → www).
  // Pages stay static via `export const prerender = true`.
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  }
});

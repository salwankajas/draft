// @ts-check
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/templates/*',
            dest: 'public/templates/'
          }
        ],
        hook: 'build',
      })
    ]
  }
});
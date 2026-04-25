// astro.config.mjs
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import lenis from 'astro-lenis'
import tailwindcss from '@tailwindcss/vite'
import { client } from './src/client.config.js'

export default defineConfig({
  site: `https://${client.domain}`,
  output: 'static',
  integrations: [
    sitemap(),
    lenis(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: '_assets'
  }
})

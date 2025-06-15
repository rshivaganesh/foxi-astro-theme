import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";
import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: 'static',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  vite: {
    server: {
      host: true
    }
  },
  experimental: {
    redirects: true
  },
  redirects: {
    'events.rsglab.online': '/events',
    'events.rsglab.online/*': '/events/:splat'
  }
});

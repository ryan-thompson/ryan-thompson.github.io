// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryanthompson.me',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
});

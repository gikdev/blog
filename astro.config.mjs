import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: "/blog/",
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});

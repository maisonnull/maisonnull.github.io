import { defineConfig } from 'astro/config';

// If your repo is named maisonnull.github.io (an organisation site), keep base as '/'.
// If you publish from a project repo instead, set base to '/repo-name'.
export default defineConfig({
  site: 'https://maisonnull.github.io',
  base: '/',
});

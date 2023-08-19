import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  experimental: {
    viewTransitions: true
  },
  output: "server",
  adapter: netlify()
});
import { defineConfig } from "astro/config";
import adapter from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: adapter(),
  integrations: [tailwind()],
});

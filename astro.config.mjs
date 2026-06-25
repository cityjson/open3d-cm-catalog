import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Deployed as a GitHub Pages project site at https://hideba.github.io/open3d-cm-catalog/.
  // `base` can be overridden at build time with PUBLIC_BASE (e.g. "/" for a custom domain).
  site: "https://hideba.github.io",
  base: process.env.PUBLIC_BASE ?? "/open3d-cm-catalog",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});

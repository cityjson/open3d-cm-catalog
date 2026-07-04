import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages behind the custom domain https://catalog.open3d.city/, so it's
  // served at the root. `base` can be overridden at build time with PUBLIC_BASE (e.g.
  // "/open3d-cm-catalog" to fall back to the GitHub Pages project-site subpath).
  site: "https://catalog.open3d.city",
  base: process.env.PUBLIC_BASE ?? "/",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});

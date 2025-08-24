import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  base: "./",
  build: {
    rollupOptions: {
      output: {
        format: "iife",
        name: "app",
        entryFileNames: `assets/bundle.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

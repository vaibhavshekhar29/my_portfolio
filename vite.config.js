import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base makes the built site work on GitHub Pages (project pages)
  // without needing to hardcode the repo name.
  base: "./",
});


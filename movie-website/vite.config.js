import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Web-Design-Projects/movie-website/", // important!
  plugins: [react()],
});

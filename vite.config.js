import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "production",
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
        contact: "other/contact.html",
      },
    },
  },
  server: {
    port: 3000,
  },
});

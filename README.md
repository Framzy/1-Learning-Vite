# 1-Learning-Vite

Learning vite for frontend build tool

```zsh
<!-- npx create-vite -->
npx vite

<!-- to build for production -->
npx vite bundle

<!-- to preview production build after bundle -->
npx vite preview
```

## Make public folder

- to serve static assets like images, fonts, and other files that don't need to be processed by Vite. Files in this folder are served at the root of the server, so you can reference them directly in your HTML or CSS. For example, if you have an image at `public/images/logo.png`, you can reference it in your HTML as `<img src="/images/logo.png" alt="Logo">`.

## Static Assets

- Vite can bundle static assets to be processed by vite , like images, fonts, and other files that are imported in your JavaScript or referenced in your CSS. These assets are processed and optimized during the build process, and their filenames are hashed to enable long-term caching.

## Config Vite

- We can configuration vite by creating a `vite.config.js` file in the root of your project. This file should export a configuration object that specifies how Vite should build and serve your project.

```js
// Example of vite.config.js
// Change dist folder to production and change port to 3000

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "production",
  },
  server: {
    port: 3000,
  },
});
```

## Multi Page Aplication

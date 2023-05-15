import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/about.html'),
        pages: resolve(__dirname, 'pages/contact.html'),
        pages: resolve(__dirname, 'pages/gallery.html'),
      },
    },
  },
})
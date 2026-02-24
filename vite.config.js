import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/reposition/',
  resolve: {
    alias: {
      "@wasm": path.resolve(__dirname, "./build-wasm"),
      "@root": path.resolve(__dirname, "./")
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})


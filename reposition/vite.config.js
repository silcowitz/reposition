import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@wasm": path.resolve(__dirname, "../build-wasm"),
      "@root": path.resolve(__dirname, "../")
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})


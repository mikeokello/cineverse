import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cineverse/',
  root: '.',
  build: {
    target: 'esnext',
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: true
  }
})
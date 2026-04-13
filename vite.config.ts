import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quest-333333333333333333/',
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})

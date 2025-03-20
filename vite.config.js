
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', // Path relativi per supportare GitHub Pages
  build: {
    outDir: 'docs', // Output della build nella cartella docs per GitHub Pages
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/pokemon-portfolio/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    historyApiFallback: true
  },
  define: {
    'process.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY),
    'process.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
    'process.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID)
  }
})
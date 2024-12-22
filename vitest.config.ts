import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    alias: {
      '@/public/': new URL('./public/', import.meta.url).pathname,
      '@/': new URL('./src/', import.meta.url).pathname
    }
  }
})

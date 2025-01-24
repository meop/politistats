import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  preview: {
    host: true,
    allowedHosts: true,
    port: 4173,
    strictPort: true,
  },
  server: {
    host: true,
    allowedHosts: true,
    port: 5173,
    strictPort: true,
  },
})

import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  optimizeDeps: {
    exclude: ['@urql/svelte'],
  },

  plugins: [sveltekit(), tailwindcss()],

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

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})

export default config

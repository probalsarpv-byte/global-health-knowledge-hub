import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/global-health-knowledge-hub/' : '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        },
      },
    },
  },
  test: { globals: true, environment: 'jsdom', setupFiles: ['./src/test/setup.ts'], pool: 'threads', maxWorkers: 1, testTimeout: 20000 },
}))


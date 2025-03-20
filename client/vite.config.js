import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for local development
// This setup is optimized for running the app locally
export default defineConfig({
  plugins: [react()],
  // Server configuration
  server: {
    // Default port for frontend
    port: 5173,
    // Display server URL in console
    open: false,
    // Enable HMR (Hot Module Replacement)
    hmr: true,
  },
})

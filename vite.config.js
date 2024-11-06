import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/kamerakidstudios2/",

  build: {
    sourcemap: false, // Disable source maps
  },
})

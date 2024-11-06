import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/kamerakidstudios/",

  build: {
    sourcemap: false, // Disable source maps
  },
})

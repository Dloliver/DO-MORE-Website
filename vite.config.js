import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Relative asset URLs work at both:
  // https://dloliver.github.io/DO-MORE-Website/
  // and the future https://domoreatl.com/
  base: './',
})

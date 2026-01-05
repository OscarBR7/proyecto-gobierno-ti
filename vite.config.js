import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Para que las rutas funcionen en producción
  build: {
    outDir: 'dist',
    sourcemap: false, // Archivos más pequeños
  }
})
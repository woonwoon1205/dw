import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dw/',
  plugins: [react()],
})

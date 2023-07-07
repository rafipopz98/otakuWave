import { defineConfig } from 'vite'
import reactFastMarquee from 'react-fast-marquee';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [reactFastMarquee],
    },
  },
})

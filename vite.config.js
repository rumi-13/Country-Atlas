import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Country-Atlas/', 
 plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), viteStaticCopy({targets: [{src: 'js/', dest: './'}, {src: 'css/', dest: './'}, {src: 'src/images/', dest: './'}]})],
  build: {outDir: './docs', emptyOutDir: true},
  base: ''
})

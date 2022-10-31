import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7777
  },
  preview: {
    port: 8080
  },
  base: "./",
  plugins: [vue()],
})

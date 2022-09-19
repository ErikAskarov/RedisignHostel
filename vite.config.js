import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path-browserify'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/RedisignHostel/',
  plugins: [vue()],
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})

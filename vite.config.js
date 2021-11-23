import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
  },
  // 設定 /src 等於 @
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})

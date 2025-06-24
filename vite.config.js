import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
console.log(process.env.NODE_ENV === 'production' ? '/happy/' : '/')
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/happy/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    assetsInlineLimit: 0, // Увеличьте или уменьшите (0 = отключить встраивание)
  },
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 51200, // Изображения меньше 8 КБ будут в base64, остальные — как файлы
            name: 'img/[name].[hash:7].[ext]', // Куда складывать большие изображения
          },
        },
      ],
    },
  ],
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        {
          src: 'src/pages',
          path: ''
        }
      ]
    }),
    vue(),
<<<<<<< HEAD
=======
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
>>>>>>> 105463f (feat: 新增 vite-plugin-vue-layouts)
    VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

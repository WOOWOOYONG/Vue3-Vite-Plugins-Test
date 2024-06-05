import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
<<<<<<< HEAD
=======
import { setupLayouts } from 'virtual:generated-layouts'
>>>>>>> 105463f (feat: 新增 vite-plugin-vue-layouts)
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
<<<<<<< HEAD
  routes
=======
  routes: setupLayouts(routes)
>>>>>>> 105463f (feat: 新增 vite-plugin-vue-layouts)
})

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

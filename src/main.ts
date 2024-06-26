import './assets/index.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes)
})

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

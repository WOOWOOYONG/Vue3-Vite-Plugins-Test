import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

createRouter({
  history: createWebHistory(),
  // pass the generated routes written by the plugin 🤖
  routes
})

import { createRouter,createWebHistory } from 'vue-router'

// @see vite-plugin-pages github
import routes from '~pages'

export const router = createRouter({
    history:createWebHistory(),
    routes,
});
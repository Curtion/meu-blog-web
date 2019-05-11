import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home/index.vue')
        },
        {
            path: '/articles/:id',
            name: 'post',
            component: () => import('./views/post/index.vue')
        },
        {
            path: '/archive',
            name: 'archive',
            component: () => import('./views/archive/index.vue')
        },
        {
            path: '/tags',
            name: 'tag',
            component: () => import('./views/tags/index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login/index.vue')
        },
        {
            name: 'search',
            path: '/search',
            component: () => import('./views/search/index.vue')
        },
        {
            name: 'about-me',
            path: '/about-me',
            component: () => import('./views/about/index.vue')
        }
    ]
})

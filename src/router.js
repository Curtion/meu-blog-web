import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Post from './views/post/index.vue'
import Archive from './views/archive/index.vue'
import Tag from './views/tags/index.vue'
import Login from './views/login/index.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/articles/:id',
            name: 'post',
            component: Post
        },
        {
            path: '/archive',
            name: 'archive',
            component: Archive 
        },
        {
            path: '/tags',
            name: 'tag',
            component: Tag
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            name: '404',
            path: '/404',
            component: NotFound
          },
          {
            path: '*',    // 此处需特别注意至于最底部
            redirect: '/404'
          }
    ]
})

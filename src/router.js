import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Post from './views/post/index.vue'
import Archive from './views/archive/index.vue'
import Tag from './views/tags/index.vue'

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
        }
    ]
})

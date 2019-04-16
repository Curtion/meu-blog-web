import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/admin/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        },
    ]
})

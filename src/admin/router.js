import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/admin/index.vue'
import Des from '../views/admin/des.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            children: [
                {
                    path: 'index',
                    name: 'Admin-index',
                    component: Des
                },
                {
                    path: 'write',
                    name: 'articleWrite',
                    component: Des
                }
            ]
        },
    ]
})

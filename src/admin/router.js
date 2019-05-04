import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/admin/index.vue'
import Write from '../views/admin/write/index.vue'
import Tags from '../views/admin/tags/index.vue'
import Kinds from '../views/admin/kinds/index.vue'
import Comments from '../views/admin/comments/index.vue'
import Articles from '../views/admin/articles/index.vue'
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
                    path: 'write',
                    name: 'Admin-write',
                    component: Write
                },
                {
                    path: 'articles',
                    name: 'Admin-articles',
                    component: Articles
                },
                {
                    path: 'comments',
                    name: 'Admin-comments',
                    component: Comments
                },
                {
                    path: 'tags',
                    name: 'Admin-tags',
                    component: Tags
                },
                {
                    path: 'kinds',
                    name: 'Admin-kinds',
                    component: Kinds
                }
            ]
        }
    ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/admin/index.vue'
import write from '../views/admin/write/index.vue'
import articles from '../views/admin/articles/index.vue'
import comments from '../views/admin/comments/index.vue'
import tags from '../views/admin/tags/index.vue'
import kinds from '../views/admin/kinds/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            component: index,
            children: [
                {
                    path: 'write',
                    name: 'Admin-write',
                    component: write
                },
                {
                    path: 'articles',
                    name: 'Admin-articles',
                    component: articles
                },
                {
                    path: 'comments',
                    name: 'Admin-comments',
                    component: comments
                },
                {
                    path: 'tags',
                    name: 'Admin-tags',
                    component: tags
                },
                {
                    path: 'kinds',
                    name: 'Admin-kinds',
                    component: kinds
                }
            ]
        }
    ]
})

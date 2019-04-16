import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element.js'

import adminRouter from './admin/router'
import Admin from './Admin.vue'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

new Vue({
    router: adminRouter,
    render: h => h(Admin)
}).$mount('#admin')
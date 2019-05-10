import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        secBody: ''
    },
    mutations: {
        setSearchContent (state, val) {
            state.secBody = val
            return state.secBody
        }
    },
    actions: {

    },
    getters: {

    }
})

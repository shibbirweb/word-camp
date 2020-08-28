import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import words from './modules/words'
import authentication from './modules/authentication'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions: {
    },
    modules: {
        words,
        authentication
    },
    plugins: [createPersistedState({
        path: ['words']
    })]
})

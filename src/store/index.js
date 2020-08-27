import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import words from './modules/words/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions: {
    },
    modules: {
        words
    }
})

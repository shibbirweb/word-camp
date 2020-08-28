import Vue from 'vue'
import { auth } from './config/firebase'
// import 3rd party scss
import './design/scss/main.scss'
// import 3rd party scripts
import './config/config'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
Vue.config.productionTip = false

let app

auth.onAuthStateChanged(user => {
    store.commit('authentication/mutationCurrentUser', user)
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})

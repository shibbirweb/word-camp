import Vue from 'vue'
// import 3rd party scss
import './design/scss/main.scss'
// import 3rd party scripts
import './config/config'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

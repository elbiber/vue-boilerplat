import './css/style.css'
import './scss/style.scss'
import './plugins/themify-icons/themify-icons.css'
import 'bootstrap'
import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

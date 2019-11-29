import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@assets/scss/index.scss'
import '@assets/js/rem'
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

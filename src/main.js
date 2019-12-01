import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@assets/scss/index.scss'
import '@assets/js/rem'
// import fastclick from 'fastclick'
import 'swiper/dist/css/swiper.css'
// fastclick.attach(document.body)
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('@assets/img/error.png'),
  loading: require('@assets/img/loading.gif'),
  attempt: 1
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

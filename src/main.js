import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
 import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'
import fastclick from 'fastclick'
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */

Vue.use(VueLazyLoad,{
  loading: require('./components/m-header/logo@2x.png')
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})

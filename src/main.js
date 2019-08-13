import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VuePPComponents from '../dist/vue-pp-components'

console.log(VuePPComponents)
Vue.use(VuePPComponents)


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

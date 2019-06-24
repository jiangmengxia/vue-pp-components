// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'babel-polyfill'
// import Es6Promise from 'es6-promise'
// require('es6-promise').polyfill()
// Es6Promise.polyfill()
// import './lib/style/index.css'
import Vue from 'vue'
import App from './App'
// import './lib/fonts/iconfont.css'
// import './lib/style/index.css'
// import 'lib-flexible/flexible.js'
import plugin from './lib'
import router from './router'
Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

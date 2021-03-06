// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import TreeTable from './components'
import TreeTable from '../dist'
import '../dist/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(TreeTable, {
  prefix: 'i'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

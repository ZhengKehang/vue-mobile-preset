import Vue from 'vue'
import App from './App.vue'
import store from './src/store'
import framework from './framework'
Vue.config.productionTip = false
Vue.use(framework)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

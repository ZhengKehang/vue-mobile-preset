import Vue from 'vue'
import App from './App.vue'
import router from './router'
import framework from './framework'
Vue.config.productionTip = false
Vue.use(framework)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

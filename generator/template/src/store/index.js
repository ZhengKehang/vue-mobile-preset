import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)
var state = {
  user:{}
};
export default new Vuex.Store({
  state,
  mutations
})

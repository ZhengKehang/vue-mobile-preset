import services from './services'
import utils from './utils'
import constants from './constants'
import methods from './methods'
import initCommonComponents from './components'
export default {
  install: function (Vue) {
    Vue.prototype.service = services;
    Vue.prototype.tools = utils;
    Vue.prototype.constants = constants;
    Object.assign(Vue.prototype,methods);
    initCommonComponents(Vue);
  }
};

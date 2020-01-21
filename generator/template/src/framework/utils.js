import config from './config'

var util = {};
for (let i in config.utils) {
  let file = config.utils[i];
  Object.defineProperty(util, i, {
    get() {
      return require('../utils/' + file).default;
    }
  });
}
export default util

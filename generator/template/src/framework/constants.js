import config from './config'

let conf = {};
for (let i in config.constants) {
  let file = config.constants[i];

  Object.defineProperty(conf, i, {
    get() {
      return require('../constants/' + file).default;
    }
  });
}
export default conf

import config from './config'

let services = {};

for (let i in config.services) {
  let file = config.services[i];

  Object.defineProperty(services, i, {
    get() {
      return Reflect.construct(require('../services/' + file).default, []);
    }
  });

}
export default services;

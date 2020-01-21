export default class BaseService {
  constructor() {
  }
  output(promise,out) {
    return new Promise((resolve, reject) => {
      promise.then((resp) => {
        if (resp.data) {
          resolve(resp.data[out]);
        } else {
          reject(resp.errorMessage || resp.error_message);
        }
      }, (resp) => {
        reject(resp.errorMessage || resp.error_message);
      })
    })
  }
}

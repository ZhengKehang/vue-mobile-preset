export default {
  getParams(type="params",key) {
    let params = this.$route[type];
    if (Object.keys(params).length) {
      if (key) {
        return params[key];
      } else {
        return params;
      }
    } else {
      return null;
    }
  },
  goBack(){
    this.$router.go(-1)
  },
  goto(name, params = {}, isReplace) {
    params = params || {};
    return new Promise((resolve) => {
      if (name) {
        if (name.indexOf('/') >= 0) {
          if (isReplace) {
            this.$router.replace({
              path: name, params
            }, () => {
              resolve && resolve();
            })
          } else {
            this.$router.push({
              path: name, params
            }, () => {
              resolve && resolve();
            })
          }
        } else {
          if (isReplace) {
            this.$router.replace({
              name, params
            }, () => {
              resolve && resolve();
            })
          } else {
            this.$router.push({
              name, params
            }, () => {
              resolve && resolve();
            })
          }
        }
      }
    })
  },
  closeRefresh(){
  },
}

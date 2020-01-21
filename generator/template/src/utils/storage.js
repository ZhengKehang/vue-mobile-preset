export default {
  setItem(key, value) {
    if(typeof value=='object'){
      value = JSON.stringify(value);
    }
    localStorage.setItem(key,value);
  },
  getItem(key) {
    let value = localStorage.getItem(key);
    try {
      value = JSON.parse(value);
      return value;
    }catch (e) {
      return value;
    }
  },
  remove(key){
    localStorage.removeItem(key);
  }
}

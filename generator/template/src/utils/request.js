import axios from 'axios'
import base from '../constants/base'
const instance = axios.create({
  baseURL:base.BASE_URL
});
export default {
  postApi (url,data) {
    return  instance({
      method:'post',
      url,
      data
    })
  }
}

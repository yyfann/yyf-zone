import Vue from "vue";
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';

// axios全局配置
Object.assign(axios.defaults, {
  baseURL: DOMAIN,
  // get请求需要序列化参数, 否则部分会变成字符串
  paramsSerializer: function(params) {
    return qs.stringify(params);
  }
});

// axios响应拦截
axios.interceptors.response.use(
  function(response) {
    if (response.config.method !== 'get') {
      Message.success('操作成功!')
    }
    console.log(response.data,'response.data')
    return response.data.data
  },
  function(error) {
    alert(error.response.data)
    Message.error('有错误', error.response.data)
    return Promise.reject(error);
  }
);

Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post



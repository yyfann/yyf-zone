import Vue from "vue";
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';

// axios全局配置
Object.assign(axios.defaults, {
  baseURL: DOMAIN,
  // 携带cookie
  withCredentials: true,
  // get请求需要序列化参数, 否则部分会变成字符串
  paramsSerializer: function (params) {
    return qs.stringify(params);
  }
});

//请求拦截
axios.interceptors.request.use((config) => {
  var token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    config.headers.common['Authorization'] = token;
  }
  return config;
})

// axios响应拦截
axios.interceptors.response.use(
  function (response) {
    const { msg, data, code } = response.data
    switch (code) {
      case 200:
        if (response.config.method !== 'get') {
          Message.success(msg || '操作成功!')
        }
        break;

      default:
        Message.error(msg)

        break;
    }

    return data
  },
  function (error) {
    Message.error(error)
    return Promise.reject(error);
  }
);

Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post



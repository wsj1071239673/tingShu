import axios from 'axios'
import router from '@/router/index'


import bus from '@/bus'//只是自定义事件

/* 
  将开发环境和生产环境区分

  process.env.NODE_ENV 
*/
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://yd.kassing.cn/api'

// 添加一个请求拦截器
axios.interceptors.request.use((config) => {
  // 获取localStorage中的token如果有则添加，如果没有则不添加
  const token = localStorage.getItem('token')
  token ? config.headers.common['Authorization'] = "Bearer " + token : null
  return config
}, (err) => {
  return Promise.reject(err)
})


// 添加一个响应拦截器
axios.interceptors.response.use((res) => {
  if (res.data.res_code === 401) {
    // 跳转到登录页
    router.push('/login')
    // 清空token和user
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    bus.$emit('logout')//不是非父子或者子父关系,只是单纯的通知

  }
  // 对响应数据做点什么
  return res;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 再重新将设置好的axios作为模块导出
export default axios
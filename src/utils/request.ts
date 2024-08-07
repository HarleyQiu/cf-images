// src/utils/request.ts
import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/auth'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // API的base_url
  timeout: 5000, // 请求超时时间
  validateStatus: function(status: number) {
    return status >= 200 && status < 500 // 所有200至499的状态码都认为是成功的
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore()
    // 例如添加token到请求头
    if (authStore.token) {
      config.headers['Authorization'] = `Bearer ${authStore.token}`
    }
    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const res = response.data
    if (response.status !== 200) {
      // 例如处理非20000的错误码
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // });

      // 假设 401: 非法Token;
      // if (response.status === 401) {
      //   return Promise.reject(new Error(response.data))
      // }

      return Promise.reject(new Error(res.error || 'Error'))
    } else {
      return res
    }
  },
  (error: any) => {
    // 对响应错误做点什么
    console.error('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // });
    return Promise.reject(error)
  }
)

export default service

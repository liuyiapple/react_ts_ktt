import axios, { AxiosResponse } from 'axios'
import Nprogress from 'nprogress'
import { message } from 'antd'
Nprogress.settings.showSpinner = false
const request = axios.create({
  baseURL: 'http://dida100.com:8888',
  timeout: 5000,
})
request.interceptors.request.use((config) => {
  let token = sessionStorage.getItem('token' || '')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
})

request.interceptors.response.use(
  (res: AxiosResponse) => {
    Nprogress.done()
    if (res.status !== 200) {
      // 没有成功
      if (res.status === 401) {
        message.info('没有权限')
      } else if (res.status === 500 || res.status === 505) {
        message.info('服务器错误')
      } else if (res.status === 404) {
        message.info('404 找不到资源')
      } else {
        message.info('请求错误')
      }
    }
    return res
  },
  (err: AxiosResponse) => {
    Nprogress.done()
    message.info('请求错误')
    console.log(err)
    return err
  }
)
export default request

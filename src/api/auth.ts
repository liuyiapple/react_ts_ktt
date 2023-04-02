import { AxiosResponse } from 'axios'
import request from '../utils/request'
import { UserType, loginResponseType } from '../types'
const login = (data: UserType): Promise<AxiosResponse<loginResponseType>> => {
  return request.post('/api/login', data)
}

const getUserMenu = () => {
  return request.get('/api/yp/user_permission')
}

export { login, getUserMenu }

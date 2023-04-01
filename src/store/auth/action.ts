import { Dispatch } from 'redux'
import { message } from 'antd'
import { SET_TOKEN, SET_USER, SET_MENU } from '../Type'
import type { MenuItemType } from '../../types'
import {
  login as loginApi,
  getUserMenu as userMenuHandle,
} from '../../api/auth'
import { UserType } from '../../types'
const login = (data: UserType, callback: Function) => {
  return (dispath: Dispatch<any>) => {
    loginApi(data).then((res: any) => {
      if (res.data.code === 200) {
        callback()
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userInfo', JSON.stringify(res.user))
        dispath({ type: SET_TOKEN, payload: res.data.token })
        dispath({ type: SET_USER, payload: res.data.user })
        dispath(getUserMenus())
      } else if (res.data.code === 1) {
        message.info('用户名或密码错误！')
      }
    })
  }
}

const formateMenu = (list: Array<any>): Array<MenuItemType> => {
  const menu: Array<MenuItemType> = []
  for (const { path, name, children } of list) {
    const obj: MenuItemType = {
      key: path,
      label: name,
      ...(children ? { children: formateMenu(children) } : {}),
    }
    menu.push(obj)
  }

  return menu
}

const getUserMenus = () => {
  return (dispatch: Dispatch) => {
    userMenuHandle().then((res) => {
      sessionStorage.setItem('menu', JSON.stringify(formateMenu(res.data.list)))
      dispatch({
        type: SET_MENU,
        payload: formateMenu(res.data.list),
      })
    })
  }
}
export { login, getUserMenus }

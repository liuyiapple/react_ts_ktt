import { ReactNode } from 'react'
interface UserType {
  name: string
  password: string
}
interface Iprops {
  children?: ReactNode
}

interface ActionType {
  type: string
  payload?: any
}

interface loginResponseType {
  // user: {
  //   name: string
  //   id: number
  //   user_group: number
  //   avatar: string
  //   score: number
  // } // 用户信息
  user: any
  token: string
  code: number
  msg?: string
}
// 菜单
interface MenuItemType {
  key: string
  label: string
  children?: Array<MenuItemType> | null
  icon?: string
  component?: string
  path?: string
}

// 权限路由格式化
interface RouterItemType {
  path?: string
  element: ReactNode
}

export type {
  UserType,
  Iprops,
  ActionType,
  loginResponseType,
  MenuItemType,
  RouterItemType,
}

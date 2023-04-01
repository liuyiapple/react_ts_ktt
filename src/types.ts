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
}

export type { UserType, Iprops, ActionType, loginResponseType, MenuItemType }

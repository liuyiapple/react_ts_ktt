import { SET_TOKEN, SET_USER, SET_ROUTES, SET_MENU } from '../Type'
import { ActionType } from '../../types'
const initialState = {
  userInfo: {}, // 用户信息
  token: '',
  menu: [], // 菜单
  routes: [], // 路由
}

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userInfo: action.payload }
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case SET_ROUTES:
      return { ...state, routes: action.payload }
    case SET_MENU:
      return { ...state, menu: action.payload }

    default:
      return state
  }
}
export default reducer

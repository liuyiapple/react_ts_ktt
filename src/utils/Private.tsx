import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Iprops } from '../types'
export default function Private(props: Iprops) {
  let token = sessionStorage.getItem('token')
  const location = useLocation()
  if (token) {
    return <>{props.children}</>
  } else {
    // 跳转到首页
    return <Navigate to={'/?redirect=' + location.pathname}></Navigate>
  }
}

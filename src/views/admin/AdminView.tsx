import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'react'
import './index.scss'
import { getUserMenus } from '../../store/auth/action'
// state 的数据类型
import type { RootState } from '../../store'
import { useEffect } from 'react'
const { Header, Footer, Sider, Content } = Layout

export default function AdminView() {
  const dispath: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  const menuFromStorage = sessionStorage.getItem('menu') || '[]'
  const menu = useSelector((state: RootState) => {
    if (menuFromStorage) {
      return JSON.parse(menuFromStorage)
    } else {
      return state.auth.menu
    }
  })

  useEffect(() => {
    if (menu.length < 2) {
      // 发起动作
      dispath(getUserMenus())
      // 如果是admin页面跳转到admin/admin
      if (location.pathname === '/admin') {
        navigate('/admin/dash')
      } else {
        // 修正bug 跳转到对应页面
        navigate(location.pathname)
      }
    }
  }, [])

  return (
    <div>
      <Layout className="layout_style">
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu onClick={onClick} mode="inline" items={menu} />
          </Sider>
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

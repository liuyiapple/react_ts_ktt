import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useSelector } from 'react-redux'
import './index.scss'
// state 的数据类型
import type { RootState } from '../../store'
const { Header, Footer, Sider, Content } = Layout

export default function AdminView() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  const menuFromStorage = sessionStorage.getItem('menu') || '[]'
  // 初始化页面的时候用useSelector((state: RootState) => state.auth.menu) 刷新页面就从本地取JSON.parea(formateMenu(res.data.list))
  const menu = useSelector((state: RootState) => {
    if (menuFromStorage) {
      return JSON.parse(menuFromStorage)
    } else {
      return state.auth.menu
    }
  })

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

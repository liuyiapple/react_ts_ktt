import Login from '../views/Login'
import AdminView from '../views/admin/AdminView'
// 权限路由
import Private from '../utils/Private'
const baseRouter = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin/',
    element: (
      <Private>
        <AdminView />
      </Private>
    ),
    children: [],
  },
]
export default baseRouter

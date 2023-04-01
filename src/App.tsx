import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/reset.css'
import RouterView from './router'
function App() {
  return (
    <Router>
      <RouterView></RouterView>
    </Router>
  )
}

export default App

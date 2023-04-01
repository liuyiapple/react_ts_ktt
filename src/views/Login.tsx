import React from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import type { Dispatch } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { login } from '../store/auth/action'
const Login: React.FC = () => {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const dispath: Dispatch<any> = useDispatch()
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const onFinish = () => {
    dispath(login({ name, password }, callback))
  }
  // 获取查询参数 和 导航
  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams()
  const redirect = search.getAll('redirect')[0] || '/admin'

  const callback = () => {
    navigate(redirect)
  }

  return (
    <div className="login_box">
      <h1>
        <span className="primary">快团团</span>登陆
      </h1>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="账号"
          rules={[{ required: true, message: '请输入账号!' }]}
        >
          <Input
            placeholder="请输入账号"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Button type="primary" block htmlType="submit">
          登陆
        </Button>
      </Form>
    </div>
  )
}
export default Login

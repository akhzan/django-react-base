import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'
import { Button, Card, Input } from 'antd'
import { Graphic, Logo, PatternOvo } from 'assets/images'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const Login = () => {
  const history = useHistory()
  const login = () => {
    history.push(URL.HOME)
  }
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 h-screen">
        <img className="w-full h-full object-cover relative" src={PatternOvo} alt="" />
        <img className="absolute bottom-0 left-8 w-1/3 h-auto" src={Graphic} alt="" />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div className="w-8/12 max-w-md flex flex-col justify-center">
          <img className="w-auto h-8 mb-12" src={Logo} alt="" />
          <div className="w-full">
            <Card>
              <div className="p-6 text-center">
                <p className="mb-2 font-semibold text-xl">Welcome back,</p>
                <p className="mb-8">Please login to your account</p>
                <Input className="mb-4" placeholder="Username" />
                <Input.Password
                  className="mb-4"
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button type="primary" className="btn primary" onClick={login}>
                  Login
                </Button>
                <div className="mt-6">
                  <a href="/">Forget Password</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

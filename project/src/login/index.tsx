import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'
import { Button, Card, Input } from 'semantic-ui-react'
import Logo from 'assets/images/logo.svg'

const Login = () => {
  const history = useHistory()
  const login = () => {
    history.push(URL.HOME)
  }
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 h-screen bg-purple-900" />
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div className="w-8/12 max-w-md flex flex-col justify-center">
          <img className="w-auto h-8 mb-12" src={Logo} alt="" />
          <div className="w-full">
            <Card fluid>
              <div className="p-6 text-center">
                <p className="mb-2 font-semibold text-xl">Welcome back,</p>
                <p className="mb-8">Please login to your account</p>
                <Input className="mb-4" fluid placeholder="Username" />
                <Input className="mb-4" fluid placeholder="Password" />
                <Button className="btn">Login</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    // <Grid className="login">
    //   <Grid.Column computer={9} only="computer">
    //     <div className="login-banner">
    //       <div>
    //         <p style={{ fontWeight: 'bold' }}>OVO</p>
    //         <p style={{ fontSize: '36px' }}>Point Injection Dashboard</p>
    //       </div>
    //     </div>
    //   </Grid.Column>
    //   <Grid.Column tablet={16} computer={7}>
    //     <div className="login-content">
    //       <Segment className="login-content__segment">
    //         <p className="title mb-3">Welcome back,</p>
    //         <p className="mb-8">Please login to your account.</p>
    //         <Form>
    //           <Form.Field>
    //             <Input placeholder="Username" />
    //           </Form.Field>
    //           <Form.Field>
    //             <Input placeholder="Password" />
    //           </Form.Field>
    //           <Button primary fluid size="large" type="submit" onClick={login}>
    //             Login
    //           </Button>
    //         </Form>
    //         <div className="login-content__forgot">
    //           <a href="/">Forget Password?</a>
    //         </div>
    //       </Segment>
    //     </div>
    //   </Grid.Column>
    // </Grid>
  )
}

export default Login

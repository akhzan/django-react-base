import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const login = () => {
    history.push(URL.HOME)
  }
  return (
    <div onClick={login}>Login</div>
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

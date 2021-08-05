import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { URL } from '../constants'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={URL.HOME}>
          <div>Home</div>
        </Route>
        <Route exact path={URL.LOGIN}>
          <div>Login</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { URL } from '../constants'
import Login from 'login'
import InjectionList from 'injection/list'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={URL.HOME}>
          <InjectionList />
        </Route>
        <Route exact path={URL.INJECTION_DETAIL}>
          <InjectionList />
        </Route>
        <Route exact path={URL.LOGIN}>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

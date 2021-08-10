import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { URL } from 'config/constants'
import Login from 'login'
import InjectionList from 'injection/list'
import PrivateRoute from './private'
import Layout from 'components/layout'

const Routes = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log('route effect')
    if ((location.pathname || '').includes(URL.LOGIN)) {
      setLoading(false)
      return
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  const router = (
    <Router>
      {!loading && (
        <Layout>
          <Switch>
            <PrivateRoute exact path={URL.HOME}>
              <InjectionList />
            </PrivateRoute>
            <PrivateRoute exact path={URL.INJECTION_DETAIL}>
              <InjectionList />
            </PrivateRoute>
            <Route exact path={URL.LOGIN}>
              <Login />
            </Route>
          </Switch>
        </Layout>
      )}
    </Router>
  )
  return loading ? <div>Loading...</div> : router
}

export default Routes

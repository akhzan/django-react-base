import { Redirect, Route, RouteProps } from 'react-router-dom'
import { URL } from '../constants'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = true
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? children : <Redirect to={{ pathname: URL.LOGIN, state: { from: location } }} />
      }
    />
  )
}

export default PrivateRoute

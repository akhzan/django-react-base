import { Redirect, Route, RouteProps } from 'react-router-dom'
import { URL } from 'config/constants'
import { useEffect } from 'react'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = true
  useEffect(() => {
    console.log('privater route effect')
  }, [])
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

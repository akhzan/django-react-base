import { PropsWithChildren } from 'react'
import Header from './header'

interface Props extends PropsWithChildren<any> {
  hide?: boolean
}

const Layout = ({ children, hide = false }: Props) => {
  if (hide) return children
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout

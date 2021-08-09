import { URL } from 'config/constants'
import { useLocation } from 'react-router-dom'
import Logo from 'assets/images/logo.svg'

const Header = () => {
  const { pathname } = useLocation()
  const isLayoutHidden = pathname.includes(URL.LOGIN)
  const header = (
    <div className="app-header">
      <img className="app-header__logo" src={Logo} alt="" />
    </div>
  )
  return isLayoutHidden ? null : header
}

export default Header

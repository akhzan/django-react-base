import { URL } from 'config/constants'
import { useLocation } from 'react-router-dom'
import Logo from 'assets/images/logo.svg'

const Header = () => {
  const { pathname } = useLocation()
  const isLayoutHidden = pathname.includes(URL.LOGIN)
  const header = (
    <div className="app-header h-16 px-28 flex justify-between items-center">
      <img className="h-8 w-auto" src={Logo} alt="" />
      <div className="flex justify-end items-center">
        <button className="btn">Create Point Injection</button>
        <div>Derto Arojasyi</div>
      </div>
    </div>
  )
  return isLayoutHidden ? null : header
}

export default Header

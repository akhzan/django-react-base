import { URL } from 'config/constants'
import { Link, useLocation } from 'react-router-dom'
import Logo from 'assets/images/logo.svg'
import Avatar from 'antd/lib/avatar/avatar'
import { DownOutlined } from '@ant-design/icons'

const Header = () => {
  const { pathname } = useLocation()
  const isLayoutHidden = pathname.includes(URL.LOGIN)
  const header = (
    <div className="app-header h-16 px-28 flex justify-between items-center">
      <Link to={URL.HOME}>
        <img className="h-8 w-auto" src={Logo} alt="" />
      </Link>
      <div className="flex items-center">
        <Avatar />
        <div className="mx-4 font-bold">Derto Arojasyi</div>
        <DownOutlined />
      </div>
    </div>
  )
  return isLayoutHidden ? null : header
}

export default Header

import React from 'react'
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../assests/pp.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarWrapper'>
        <div className="navLeft">
          <span className='logo'>admin</span>
        </div>

        <div className="navRight">
          <div className="navIcon">
            <NotificationsNoneIcon className="navIconBar"/>
            <span className="navIconBadge">2</span>
          </div>
          <div className="navIcon">
            <LanguageIcon className="navIconBar" />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navIcon">
            <SettingsIcon className="navIconBar"/>            
          </div>
          <img src={logo} alt="" className="navAvatar"/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
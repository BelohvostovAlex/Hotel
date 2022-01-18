import React from 'react'

import { Link } from 'react-router-dom'

import {FaAlignRight} from 'react-icons/fa'
import {SiHotelsdotcom} from 'react-icons/si'


const menuLinks = [{title: 'Home', path: '/'}, {title: 'Rooms', path: '/rooms/'}]

export const Navbar = () => {
    const [isOpen, setOpen] = React.useState(false)

    const handleToggle = () => {
        setOpen(!isOpen)
        console.log(isOpen)
    }
    
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-center">
            <div className="navbar-header">
              <Link to={'/'} className='navbar-logo'>
                <SiHotelsdotcom className="navbar-logo-icon" />ampton resort
              </Link> 
              <button className="navbar-Btn" onClick={handleToggle}>
                <FaAlignRight className="navbar-burger" />
              </button>
            </div>
            <ul className={isOpen ? 'navbar-links show' : 'navbar-links'}>
              {menuLinks.map((menuLink) => (
                <li key={menuLink.path}>
                  <Link to={menuLink.path}>{menuLink.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
}

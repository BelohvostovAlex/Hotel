import React from 'react'

import { Link } from 'react-router-dom'

import {FaAlignRight} from 'react-icons/fa'


const menuLinks = [{title: 'Home', path: '/'}, {title: 'Rooms', path: '/rooms/'}]

export const Navbar = () => {
    const [isOpen, setOpen] = React.useState(false)

    const handleToggle = () => {
        setOpen(!isOpen)
        console.log(isOpen)
    }
    
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to={"/"}></Link>
                    <button className='navBtn' onClick={handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                        </button>
                </div>
                <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    {menuLinks.map(menuLink => <li key={menuLink.path}><Link to={menuLink.path}>{menuLink.title}</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}

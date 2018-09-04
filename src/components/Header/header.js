import React from 'react'
import {Link} from 'gatsby'
import Logo from '../svg/Logo'
import Letters from '../Letters'
import IconBurgerMenu from '../icons/IconBurgerMenu'
import IconXmasCat from '../icons/IconXmasCat'
import './header.scss'
import MenuBar from '../Menu'

const Header = props => {
  const {toggle, open} = props

  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <Logo
            height="80"
            fill="rgba(255,255,255,.7)"
            alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
        </Link>
        <div style={{width: '10%'}} className="navbar-item is-hidden-tablet"></div>
        <div className="navbar-item is-hidden-tablet"><IconXmasCat width="75" /></div>
        <div
          id="burger-container"
          onClick={toggle}
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false">
          <IconBurgerMenu open={open}/>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Letters width="8%" fill="white" maxWidth="500px"/>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <MenuBar/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

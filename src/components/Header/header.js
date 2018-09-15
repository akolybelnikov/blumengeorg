import React from 'react'
import {Link} from 'gatsby'
import LogoLetters from '../svg/LogoLetters'
import IconBurgerMenu from '../icons/IconBurgerMenu'
import './header.scss'
import MenuBar from '../Menu'

const Header = props => {
  const {toggle, open} = props

  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div style={{justifyContent: 'space-between'}} className="navbar-brand">
        <Link className="navbar-item" to="/">
          <LogoLetters
            height="80"
            fill="rgba(255,255,255,.85)"
            alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
        </Link>
        <div
          style={{marginLeft: 0}}
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

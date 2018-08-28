import React from 'react'
import {Link} from 'gatsby'
import Logo from './svg/Logo'
import Letters from './Letters'
import IconBurgerMenu from './icons/IconBurgerMenu'
import styled from 'styled-components'

const Burger = styled.div `
margin-right: 10px;
margin-top: 10px;
  @media screen and (min-width: 415px) {
    margin-right: 25px;
    margin-top: 5px;
  }
`

const Header = props => {
  const { toggle, open } = props
  
  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <Logo
          height="80"
          fill="rgba(255,255,255,.7)"
          alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
      </Link>
      <Burger onClick={toggle}
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false">
        <IconBurgerMenu open={open}/>
      </Burger>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item is-tab" to="/">
          <Letters width="1.5%" fill="white"/>
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  </nav>
  )
}

export default Header

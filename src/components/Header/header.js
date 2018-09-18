import React from 'react'
import {Link} from 'gatsby'
import LogoLetters from '../svg/LogoLetters'
import IconBurgerMenu from '../icons/IconBurgerMenu'
import './header.scss'
import MenuBar from '../Menu'
import MapMarker from '../icons/MapMarker'

const Header = props => {
  const {toggle, open} = props

  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div
        style={{
        justifyContent: 'space-between',
        with: '100%'
      }}
        className="navbar-brand">
        <Link className="navbar-item is-hidden-mobile" to="/">
          <LogoLetters
            height="100"
            fill="rgba(255,255,255,.85)"
            alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
        </Link>
        <Link className="navbar-item is-hidden-tablet" to="/">
          <LogoLetters
            height="70"
            fill="rgba(255,255,255,.85)"
            alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
        </Link>
        <div
          style={{
          marginLeft: 0
        }}
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
          {(props.location && props.location.pathname !== '/contact') && <Link
            style={{
            alignSelf: 'center',
            marginRight: '2rem'
          }}
            id="contact-link"
            className="navbar-item is-hidden-mobile button is-primary is-outlined is-inverted is-medium"
            to="contact">
            <span className="icon"><MapMarker
              height="50"
              fill="rgba(255,255,255,.85)"
              alt="Blumenhaus Georg: Lage in Koeln"/></span>
            <span className="has-text-grey-lighter">Finde uns</span>
          </Link>}
          <div className="navbar-item">
            <MenuBar/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

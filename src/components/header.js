import React from 'react'
import {Link} from 'gatsby'
import Logo from './svg/Logo'

const Header = ({siteTitle}) => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <Logo height="80" fill="rgba(255,255,255,.7)" alt="Blumenhaus Georg: Der Blumenladen Ihrer Wahl in Koeln"/>
      </Link>
    </div>
  </nav>
)

export default Header

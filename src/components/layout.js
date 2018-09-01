import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import SlideMenu from './sidemenu/SlideMenu'
import './layout.css'
import './bulma.scss'
import config from '../../siteConfig'
import favicon from '../images/favicon.ico'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false
    };
  }

  toggleSideMenu = () => {
    this.setState(prevstate => ({ sideMenuOpen: !prevstate.sideMenuOpen }))
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          meta={[
          {
            name: 'description',
            content: config.siteDescription
          }, {
            name: 'keywords',
            content: 'Blumen, Blumenladen, Georg, Blumenhaus, Geburtstag, Advent, Beerdigung, Pflanzen, Topf, Hochzeit, Geschenk, Blumengeschaeft, Cologne, Rosen, Schoene Blumen'
          }
        ]}>
          <html lang="en"/>
          <link rel="icon" href={favicon}/>
          <meta property="og:title" content={config.siteTitle}/>
          <meta property="og:url" content={config.siteUrl}/>
          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content={config.siteTitle}/>
        </Helmet>
        <Header open={this.state.sideMenuOpen} toggle={this.toggleSideMenu} />
        <SlideMenu open={this.state.sideMenuOpen} toggle={this.toggleSideMenu} />
        <div
          style={{
          margin: '0 auto',
          maxWidth: 1200,
          padding: '3.0875rem 1rem',
          minHeight: '85vh',
          width: '100%'
        }}>
          {this.props.children}
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

import React, {Fragment, Component} from 'react'
import Helmet from 'react-helmet'
import Header from './Header/header'
import Footer from './Footer/footer'
import SlideMenu from './sidemenu/SlideMenu'
import './layout.css'
import './bulma.scss'
import config from '../../siteConfig'
import favicon from '../images/favicon.ico'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false
    };
  }

  toggleSideMenu = () => {
    this.setState(prevstate => ({
      sideMenuOpen: !prevstate.sideMenuOpen
    }))
  }

  render() {
    return (
      <Fragment>
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
          <meta
            property="og:google-site-verification"
            content="bGDpkZUqpbVGBLN1SPNqlckUII03Cv-wiF-eukGFGsY"/>
        </Helmet>
        <SlideMenu open={this.state.sideMenuOpen} toggle={this.toggleSideMenu}/>
        <Header location={this.props.location} open={this.state.sideMenuOpen} toggle={this.toggleSideMenu}/>
        <div
          id="root-container"
          style={{
          margin: '0 auto',
          maxWidth: 1800,
          padding: '4.0875rem 1rem',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: this.props.justifyContent,
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          scrollBehavior: 'smooth'
        }}>
          {this.props.children}
        </div>
        <Footer location={this.props.location}/>
      </Fragment>
    )
  }
}

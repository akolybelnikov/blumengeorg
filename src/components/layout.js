import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import './bulma.scss'
import config from '../../siteConfig'
import favicon from '../images/favicon.ico'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: config.siteDescription },
            { name: 'keywords', content: 'Blumen, Blumenladen, Georg, Blumenhaus, Geburtstag, Advent, Beerdigung, Pflanzen, Topf, Hochzeit, Geschenk, Blumengeschaeft, Cologne, Rosen, Schoene Blumen' },
          ]}
        >
          <html lang="en" />
          <link rel="icon" href={favicon} />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '3.0875rem 1.45rem',
            minHeight: '80vh'
          }}
        >
          {children}
        </div>   
        <Footer/>    
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

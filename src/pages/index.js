import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p className="has-text-centered">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link className="button" to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

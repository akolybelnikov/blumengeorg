import React from 'react'
import { Link } from 'gatsby'

import Carousel from '../components/Carousel/Carousel'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Link className="button is-primary" to="/page-2/">Go to page 2</Link>
    <Carousel />
  </Layout>
)

export default IndexPage


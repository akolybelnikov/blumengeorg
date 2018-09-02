import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/Parallax/Parallax'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import Responsive from 'react-responsive'

const Mobile = props => <Responsive {...props} maxWidth={823}/>
const Default = props => <Responsive {...props} minWidth={824}/>

const IndexPage = (props) => {
  return (
    <Layout>
      <Default>
        <Parallax/>
      </Default>
      <Mobile>
        <Carousel/>
        <Categories/>
      </Mobile>
    </Layout>
  )
}

export default IndexPage

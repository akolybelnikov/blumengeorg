import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/Parallax/Parallax'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import Responsive from 'react-responsive'
import Letters from '../components/Letters'
import IconBouquetCat from '../components/icons/IconBouquetCat'
import IconBirthdayCat from '../components/icons/IconBirthdayCat'

const Mobile = props => <Responsive {...props} maxWidth={823}/>
const Default = props => <Responsive {...props} minWidth={824}/>

const IndexPage = (props) => {
  return (
    <Layout>
      <Default>
        <Parallax/>
      </Default>
      <Mobile>
        <div
          style={{
          margin: '10px 0',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <Letters maxWidth={'90%'} width={'8%'} fill={'whitesmoke'}/>
        </div>
        <Carousel/>
        <div
          style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <IconBouquetCat width="120"/>
        </div>
        <Categories/>
        <div
          style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <IconBirthdayCat height="120"/>
        </div>
      </Mobile>
    </Layout>
  )
}

export default IndexPage

import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/Parallax/Parallax'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import Responsive from 'react-responsive'
import OpenTimes from '../components/OpenTimes/OpenTimes'
import IconBouquetCat from '../components/icons/IconBouquetCat'
import IconBirthdayCat from '../components/icons/IconBirthdayCat'
import Arch from '../components/Arch'
import IconDeliveryCat from '../components/icons/IconDeliveryCat'

const Mobile = props => <Responsive {...props} maxWidth={823}/>
const Default = props => <Responsive {...props} minWidth={824}/>

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Default>
        <Parallax/>
      </Default>
      <Mobile>
        <div
          style={{
            position: 'absolute',
            left: '-7vw',
            top: '-10vh'
          }}
        >
          <Arch width={'110vw'} height={'110vh'} />
        </div>
        <div
          style={{
          marginTop: 0,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '5vh'
        }}></div>
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
          margin: '10px 0',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <IconBirthdayCat height="120"/>
        </div>
        <OpenTimes />
        <div
          style={{
          marginTop: '10px',
          marginBottom: '-50px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <IconDeliveryCat width="100" height="100"/>
        </div>
      </Mobile>
    </Layout>
  )
}

export default IndexPage

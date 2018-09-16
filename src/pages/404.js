import React from 'react'
import Layout from '../components/layout'
import Responsive from 'react-responsive'
import IconDeliveryCat from '../components/icons/IconDeliveryCat'

const Mobile = props => <Responsive {...props} maxWidth={767} orientation={'portrait'}/>
const MobileLandscape = props => (<Responsive {...props} maxWidth={823} orientation={'landscape'}/>)
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1023}/>
const Default = props => (<Responsive {...props} minWidth={1024}/>)

const NotFoundPage = props => (
  <Layout location={props.location} justifyContent={'center'} >
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0
    }}>
      <h2 style={{color: 'rgba(101,55,148,1)'}}>Nichts gefunden ...</h2>
      <Default>
        <IconDeliveryCat height="200"/>
      </Default>
      <Tablet>
        <IconDeliveryCat height="185"/>
      </Tablet>
      <Mobile>
        <IconDeliveryCat height="110"/>
      </Mobile>
      <MobileLandscape>
        <IconDeliveryCat height="100"/>
      </MobileLandscape>
    </div>
  </Layout>
)

export default NotFoundPage

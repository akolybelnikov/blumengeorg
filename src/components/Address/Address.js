import React from 'react'
import MapMarker from '../icons/MapMarker'
import Responsive from 'react-responsive'
import './Address.scss'

const Mobile = props => <Responsive {...props} maxWidth={767} orientation={'portrait'} />
const MobileLandscape = props => (
  <Responsive {...props} maxWidth={823} orientation={'landscape'} />
)
const DefaultGeneral = props => <Responsive {...props} minWidth={768} />

const Address = props => {
  return (
    <div id="address-container">
      <div id="icon-marker">
        <DefaultGeneral>
          <MapMarker width="36" height="36" fill="whitesmoke" />
        </DefaultGeneral>
        <Mobile>
          <MapMarker width="24" height="24" fill="whitesmoke" />
        </Mobile>
        <MobileLandscape>
          <MapMarker width="24" height="24" fill="whitesmoke" />
        </MobileLandscape>
      </div>
      <div id="street-address">
        <p>Blumenhaus Georg</p>
        <p>Gladbacher Str. 17-19,</p>
        <p>50672 Köln</p>
      </div>
    </div>
  )
}

export default Address

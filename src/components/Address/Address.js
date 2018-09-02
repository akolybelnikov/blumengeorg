import React from 'react'
import MapMarker from '../icons/MapMarker'
import './Address.scss'

const Address = props => {
  return (
    <div id="address-container">
      <div id="icon-marker">
        <MapMarker width="24" height="24" fill="whitesmoke"/>
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

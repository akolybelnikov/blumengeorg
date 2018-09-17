import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import './Details.scss'

class GoogleMap extends Component {
  render() {
    return (
      <Map
        className="google-map"
        google={this.props.google}
        zoom={15}
        initialCenter={{
        lat: 50.945803,
        lng: 6.939541
      }}
        scrollwheel={false}
        gestureHandling={'cooperative'}>
        <Marker
          title={'Blumen Georg'}
          name={'Blumen Georg'}
          position={{
          lat: 50.945803,
          lng: 6.939541
        }}/>
        <Marker/>
      </Map>
    )
  }
}

export default GoogleApiWrapper(() => ({
  apiKey: "AIzaSyAZsuj5iITal3Ilou_krh70Jg53il2sudY"
}))(GoogleMap)

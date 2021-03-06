import React from 'react'
import Address from '../Address/Address'
import Telephone from '../Address/Telephone'
import Email from '../Address/Email'
import IconHotlineCat from '../icons/IconHotlineCat'
import './footer.scss'
import {Link} from 'gatsby'
import MapMarker from '../icons/MapMarker'

const Footer = props => {
  return (
    <footer id="main-footer" className="footer">
      <div className="level">
        <div className="level-left">
          {(props.location && props.location.pathname !== '/contact') && <div className="level-item is-hidden-tablet">
            <Link
              className="map-button is-hidden-tablet button is-primary is-outlined is-inverted"
              to="contact">
              <span style={{marginRight: '10px'}} className="icon"><MapMarker
                width="24"
                fill="rgba(255,255,255,.85)"
                alt="Blumenhaus Georg: Lage in Koeln"/></span>
              <span>Finde uns auf der Map</span>
            </Link>
          </div>}
          <div className="level-item"><Address/></div>
          <div className="level-item"><Telephone/></div>
          <div className="level-item"><Email/></div>
        </div>
        <div className="level-right">
          <div className="level-item"><IconHotlineCat height="100"/></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
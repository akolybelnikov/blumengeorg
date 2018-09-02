import React from 'react'
import Phone from '../icons/Phone'
import Responsive from 'react-responsive'
import './Address.scss'

const Mobile = props => <Responsive {...props} maxWidth={767} orientation={'portrait'}/>
const MobileLandscape = props => (
  <Responsive {...props} maxWidth={823} orientation={'landscape'} />
)
const DefaultGeneral = props => <Responsive {...props} minWidth={768} />

const Telephone = props => {
  return (
    <div id="telephone-container">
      <div id="icon-phone">
        <DefaultGeneral>
          <Phone width="36" height="36" fill="whitesmoke" />
        </DefaultGeneral>
        <Mobile>
          <Phone width="24" height="24" fill="whitesmoke" />
        </Mobile>
        <MobileLandscape>
          <Phone width="24" height="24" fill="whitesmoke" />
        </MobileLandscape>
      </div>
      <div id="telephone-number">
        <p>T +49 221 721 64 35</p>
        <p>T +49 221 997 532 39</p>
        <p>M +49 179 731 94 55</p>
      </div>
    </div>
  )
}

export default Telephone

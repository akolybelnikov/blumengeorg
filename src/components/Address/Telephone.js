import React from 'react'
import Phone from '../icons/Phone'
import './Address.scss'

const Telephone = props => {
  return (
    <div id="telephone-container">
      <div id="icon-phone">
        <Phone width="24" height="24" fill="whitesmoke"/>
      </div>
      <div id="telephone-number">
        <a href="tel:49-221-721-64-35">T +49 221 721 64 35</a>
        <a href="tel:49-221-997-532-39">T +49 221 997 532 39</a>
        <a href="tel:49-179-731-94-55">M +49 179 731 94 55</a>
      </div>
    </div>
  )
}

export default Telephone

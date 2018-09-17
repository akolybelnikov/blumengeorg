import React from 'react'
import Phone from '../icons/Phone'
import './Address.scss'

const Telephone = props => {
  return (
    <div id="telephone-container">
      <div id="telephone-number">
        <a
          className="button is-primary is-inverted is-outlined"
          href="tel:00492217216435">
          <span style={{
            marginRight: '21px'
          }} className="icon">
            <Phone width="24" height="24" fill="whitesmoke"/>
          </span>
          <span>T +49 221 721 64 35</span>
        </a>
        <a
          className="button is-primary is-inverted is-outlined"
          href="tel:004922199753239">
          <span style={{
            marginRight: '17px'
          }} className="icon">
            <Phone width="24" height="24" fill="whitesmoke"/>
          </span>
          <span>T +49 221 997 532 39</span>
        </a>
        <a
          className="button is-primary is-inverted is-outlined"
          href="tel:00491797319455">
          <span style={{
            marginRight: '20px'
          }} className="icon">
            <Phone width="24" height="24" fill="whitesmoke"/>
          </span>
          <span>M +49 179 731 94 55</span>
        </a>
      </div>
    </div>
  )
}

export default Telephone

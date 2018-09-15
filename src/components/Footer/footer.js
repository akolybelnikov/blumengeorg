import React from 'react'
import Address from '../Address/Address'
import Telephone from '../Address/Telephone'
import Email from '../Address/Email'
import IconHotlineCat from '../icons/IconHotlineCat'
import './footer.scss'

const Footer = () => (
  <footer id="main-footer" className="footer">
    <div className="level">
      <div className="level-left">
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

export default Footer
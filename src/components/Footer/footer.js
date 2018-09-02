import React from 'react'
import Address from '../Address/Address'
import Telephone from '../Address/Telephone'
import IconBouquetcat from '../icons/IconBouquetCat'
import './footer.scss'

const Footer = () => (
  <footer id="main-footer" className="footer">
    <div className="level">
      <div className="level-left">
        <div className="level-item"><Address/></div>
        <div className="level-item"><Telephone/></div>
      </div>
      <div className="level-right">
        <div className="level-item"><IconBouquetcat height="100"/></div>
      </div>
    </div>
  </footer>
)

export default Footer
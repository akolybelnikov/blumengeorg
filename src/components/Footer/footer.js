import React from 'react'
import Address from '../Address/Address'
import Telephone from '../Address/Telephone'
import IconBouquetcat from '../icons/IconBouquetCat'

const Footer = () => (
  <footer style={{padding: '1.5rem'}} className="footer">
    <div className="level is-mobile">
      <div className="level-left">
      <Address />
      <Telephone />
      </div>
      <div className="level-right">
        <IconBouquetcat height="150" />
      </div>
    </div>
  </footer>
)

export default Footer
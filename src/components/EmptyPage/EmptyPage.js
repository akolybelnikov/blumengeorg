import React from 'react'
import IconGardeningCat from '../icons/IconGardeningCat'
import './EmptyPage.scss'

const EmptyPage = () => {
  return (
    <div className="empty-page-container">
      <div className="icon-holder">
        <p className="has-text-centered has-text-primary is-size-1-widescreen is-size-2-desktop is-size-3-tablet is-size-4-mobile">Wir arbeiten hart</p>
        <IconGardeningCat width="100%" />
        <p className="has-text-centered has-text-primary is-size-1-widescreen is-size-2-desktop is-size-3-tablet is-size-4-mobile">um hier etwas zu zeigen</p>
      </div>
    </div>
  )
}

export default EmptyPage

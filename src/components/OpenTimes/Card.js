import React from 'react'
import './OpenTimes.scss'

const Card = props => {
  return (
    <div className="ui-card">
      <p className="days">{props.days}</p>
      <div className="hours">
        <p>
          <span className="has-text-grey-light">haben wir</span> von {props.open} Uhr bis {props.closed} Uhr{' '}
          <span className="has-text-grey-light">auf</span>
        </p>
      </div>
    </div>
  )
}

export default Card

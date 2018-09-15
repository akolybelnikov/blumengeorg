import React from 'react'
import Card from './Card'
import './OpenTimes.scss'

const details = [
  {
    open: '14.00',
    days: 'Mo.',
    break: 'keine',
    closed: '19.00',
  },
  {
    open: '10.00',
    days: 'Di. bis Fr.',
    break: 'keine',
    closed: '19.00',
  },
  {
    open: '10.00',
    days: 'Sa.',
    break: 'keine',
    closed: '18.00',
  },
  {
    open: '11.00',
    days: 'So.',
    break: 'keine',
    closed: '15.00',
  },
]

const OpenTimes = () => {
  return (
    <div className="card-container">
      {details.map(item => (
        <Card
          key={item.days}
          open={item.open}
          closed={item.closed}
          days={item.days}
          break={item.break}
        />
      ))}
    </div>
  )
}

export default OpenTimes

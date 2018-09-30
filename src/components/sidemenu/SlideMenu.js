import React from 'react'
import {Keyframes, animated, config} from 'react-spring'
import delay from 'delay'
import NestedMenu from './NestedMenu'
import LogoLetters from '../svg/LogoLetters'
import IconBurgerMenu from '../icons/IconBurgerMenu'

const Sidebar = Keyframes.Spring({
  open: async call => {
    await delay(100)
    await call({
      to: {
        x: 0
      },
      config: config.default
    })
  },
  closed: async call => {
    await delay(200)
    await call({
      to: {
        x: 100
      },
      config: config.gentle
    })
  }
})

const SlideMenu = props => {
  const state = props.open
    ? 'open'
    : 'closed'
  const {toggle} = props
  return (
    <Sidebar native state={state}>
      {({x}) => (
        <animated.div
        className="has-navbar-fixed-bottom"
        style={{
          top: 0,
          padding: '0 15px',
          position: 'fixed',
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,1)',
          zIndex: 1000,
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
          overflowY: 'scroll'
        }}>
          <NestedMenu visible={true} toggle={toggle}/>
          <div
            onClick={toggle}
            style={{
            cursor: 'pointer',
            top: 10,
            right: 10,
            position: 'fixed'
          }}>
            <IconBurgerMenu open={state}/>
          </div>        
            <div className="level is-mobile">
              <div className="level-left logo">
                <LogoLetters className="level-item" height="80" fill="whitesmoke"/>
              </div>
            </div>
        </animated.div>
      )}
    </Sidebar>
  )
}

export default SlideMenu

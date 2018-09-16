import React from 'react'
import {Keyframes, animated, config} from 'react-spring'
import delay from 'delay'
import NestedMenu from './NestedMenu'
import LogoLetters from '../svg/LogoLetters'
import IconBurgerMenu from '../icons/IconBurgerMenu'
import Letters from '../Letters'

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
        x: -100
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
          padding: '10px 15px',
          position: 'fixed',
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,1)',
          zIndex: 1000,
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
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
          <nav className="navbar is-fixed-bottom">
            <div className="level is-mobile">
            <div className="level-item" style={{margin: '10px 0', flexGrow: 0}}>
              <LogoLetters height="80" fill="whitesmoke"/>
            </div>
            <div className="lavel-item">
              {/** <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Letters width="5%" fill="white"/>
                    </div> **/}
            </div>
            </div>
          </nav>
        </animated.div>
      )}
    </Sidebar>
  )
}

export default SlideMenu

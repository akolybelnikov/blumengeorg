import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  width: 60px;
  height: 60px;
  @media screen and (min-width: 415px) {
    width: 80px;
    height: 80px;
  }
`
const TopBar = styled.path`
  stroke-width: 20;
  stroke-linecap: round;
  stroke: #fff;
  fill: none;
  transition: all 0.5s ease-in-out;
  stroke-dasharray: 240px 910px;
`
const MiddleBar = styled.path`
  stroke-width: 20;
  stroke-linecap: round;
  stroke: #fff;
  fill: none;
  transition: all 0.5s ease-in-out;
`
const BottomBar = styled.path`
  stroke-width: 20;
  stroke-linecap: round;
  stroke: #fff;
  fill: none;
  transition: all 0.5s ease-in-out;
  stroke-dasharray: 240px 910px;
`
const IconBurgerMenu = props => {
  
    let arrayMiddle = props.open ? '0px 220px' : '240px 240px'
    let offsetTopBottom = props.open ? '-650px' : 0
    let offsetMiddle = props.open ? '-120px' : '0'

    return (
      <SVG viewBox="0 0 800 600">
        <TopBar
          style={{ strokeDashoffset: offsetTopBottom }}
          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
        />

        <MiddleBar
          style={{
            strokeDasharray: arrayMiddle,
            strokeDashoffset: offsetMiddle,
          }}
          d="M300,320 L540,320"
        />

        <BottomBar
          style={{ strokeDashoffset: offsetTopBottom }}
          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
          transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
        />
      </SVG>
    )
  
}

export default IconBurgerMenu

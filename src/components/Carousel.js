import React, { PureComponent } from 'react'
import Img from 'gatsby-image'
import { Transition, animated, config } from 'react-spring'
import styled from 'styled-components'

const defaultStyles = {
  position: 'absolute',
  width: '100%',
  boxSizing: 'border-box',
}

const Main = styled.div`
  position: absolute;
  width: 100%;
  top: 15vh;
  @media screen and (max-width: 823px) and (orientation: landscape) {
    top: 25vh;
  }
`
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 10px 1fr 1fr 15px;
  height: 25vh;
  @media screen and (max-width: 415px) and (orientation: portrait) {
    height: 77vh;
    grid-template-columns: 10vw 1fr 1fr 20px;
  }
  @media screen and (min-width: 416px) and (max-width: 1024px) {
    height: 40vh;
    grid-template-columns: 5vw 1fr 1fr 5vw;
  }
  @media screen and (min-width: 1025px) {
    height: 5vh;
  }
  @media screen and (max-width: 823px) and (orientation: landscape) {
    height: 0;
  }
  .gatsby-image-outer-wrapper {
    margin-right: 5px;
    @media screen and (max-width: 560px) and (orientation: portrait) {
      width: 75vw;
    }
    @media screen and (max-width: 823px) and (orientation: landscape) {
      max-width: 60%;
      margin-left: 20%;
    }
    @media screen and (min-width: 1025px) {
      max-width: 60%;
      margin-left: 20%;
    }
  }
`
const RightImage = styled(Img)`
  -ms-transform: rotate(5deg); /* IE 9 */
  -webkit-transform: rotate(5deg); /* Safari */
  transform: rotate(5deg); /* Standard syntax */
  background-color: rgba(133, 112, 153, 0.5);
  border: 10px solid rgba(133, 112, 153, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 823px) {
    border: 5px solid rgba(133, 112, 153, 0.5);
  }
`

const LeftImage = styled(Img)`
  -ms-transform: rotate(-5deg); /* IE 9 */
  -webkit-transform: rotate(-5deg); /* Safari */
  transform: rotate(-5deg); /* Standard syntax */
  background-color: rgba(133, 112, 153, 0.5);
  border: 10px solid rgba(133, 112, 153, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 823px) {
    border: 5px solid rgba(133, 112, 153, 0.5);
  }
`

export default class Carousel extends PureComponent {
  state = {
    index: 0,
    pages: [
      style => (
        <animated.div style={{ ...style, ...defaultStyles }}>
          <div />
          <ImageContainer>
            <div />
            <div />
            <RightImage sizes={this.props.images[0].node.sizes} />
          </ImageContainer>
          <ImageContainer>
            <div />
            <LeftImage sizes={this.props.images[1].node.sizes} />
            <div />
          </ImageContainer>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style, ...defaultStyles }}>
          <div></div>
          <ImageContainer>
            <div />
            <div />
            <RightImage sizes={this.props.images[2].node.sizes} />
          </ImageContainer>
          <ImageContainer>
            <div />
            <LeftImage sizes={this.props.images[3].node.sizes} />
            <div />
          </ImageContainer>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style, ...defaultStyles }}>
          <div> </div>
          <ImageContainer>
            <div />
            <div />
            <RightImage sizes={this.props.images[4].node.sizes} />
          </ImageContainer>
          <ImageContainer>
            <div />
            <LeftImage sizes={this.props.images[5].node.sizes} />
            <div />
          </ImageContainer>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style, ...defaultStyles }}>
          <div> </div>
          <ImageContainer>
            <div />
            <div />
            <RightImage sizes={this.props.images[6].node.sizes} />
          </ImageContainer>
          <ImageContainer>
            <div />
            <LeftImage sizes={this.props.images[7].node.sizes} />
            <div />
          </ImageContainer>
        </animated.div>
      ),
    ],
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        index: state.index === 3 ? 0 : state.index + 1,
      }))
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Main>
        <Transition
          native
          config={config.slow}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-30%,0,0)' }}
        >
          {this.state.pages[this.state.index]}
        </Transition>
      </Main>
    )
  }
}

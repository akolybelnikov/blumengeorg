import React, { PureComponent } from 'react'
import { Transition, config } from 'react-spring'
import './Carousel.scss'
import Slide from './Slide'

const defaultStyles = {
  width: '90%',
  position: 'absolute',
  marginLeft: '5%'
}

export default class CarouselImages extends PureComponent {
  state = {
    index: 0,
    pages: []
  }

  componentDidMount() {
    const { images } = this.props

    const slides = [
        style => (<Slide style={{...style, ...defaultStyles}} left={images[0]} right={images[1]} />),
        style => (<Slide style={{...style, ...defaultStyles}} left={images[2]} right={images[3]} />),
        style => (<Slide style={{...style, ...defaultStyles}} left={images[4]} right={images[5]} />),
        style => (<Slide style={{...style, ...defaultStyles}} left={images[6]} right={images[7]} />)
    ]

    this.setState({pages: slides})

    this.timer = setInterval(() => {
      this.setState(state => ({
        index: state.index === 3 ? 0 : state.index + 1,
      }))
    }, 7000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const {pages, index } = this.state
    return (
      <section id="carousel-section" className="section">          
        <Transition
          native
          config={config.slow}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-30%,0,0)' }}
        >
          {pages[index]}
        </Transition>         
      </section>
    )
  }
}

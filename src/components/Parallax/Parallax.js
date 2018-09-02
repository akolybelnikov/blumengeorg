import React from 'react'
import {Parallax} from 'react-spring'
import Carousel from '../Carousel/Carousel'
import LazyLoad from 'react-lazy-load'
import ErrorBoundary from '../ErrorBoundary'

import './Parallax.scss'

class ParallaxPage extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Parallax
                style={{
                left: 0,
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none'
            }}
                ref={ref => {
                this.parallax = ref
            }}
                pages={3}>

                <Parallax.Layer
                    offset={0}
                    speed={0.3}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <Carousel/>
                </Parallax.Layer>

            </Parallax>
        )
    }

}

export default ParallaxPage
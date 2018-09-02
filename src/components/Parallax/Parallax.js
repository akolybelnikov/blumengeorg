import React from 'react'
import {Parallax} from 'react-spring'
import Carousel from '../Carousel/Carousel'
import Categories from '../Categories/Categories'

import './Parallax.scss'

class ParallaxPage extends React.PureComponent {
    render() {
        return (
            <Parallax
                className="main-parallax"
                style={{
                    left: 0,
                    scrollBehavior: 'smooth'               
                }}
                ref={ref => {
                    this.parallax = ref
                }}
                pages={3}>

                <Parallax.Layer
                    offset={0.1}
                    speed={0.3}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <Carousel />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={1}
                    onClick={() => this.parallax.scrollTo(2)}>
                    <Categories />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={1}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <div style={{height: 200}}></div>
                </Parallax.Layer>

            </Parallax>
        )
    }

}

export default ParallaxPage
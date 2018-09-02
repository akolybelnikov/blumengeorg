import React from "react"
import Img from 'gatsby-image'

import './Carousel.scss'

const Slide = ({image}) => {
    return (
        <div className="container slider-item">
            <div className="box">
                <Img outerWrapperClassName="slider-image" fluid={image}/>
            </div>
        </div>
    )
}

export default Slide
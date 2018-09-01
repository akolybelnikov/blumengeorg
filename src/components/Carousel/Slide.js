import React from "react"
import { animated } from 'react-spring'
import Img from 'gatsby-image'

const Slide = (props) => {
    const {left, right, style } = props
    return (
    <animated.div className="columns is-variable is-8" style={style}>     
        <div className="column is-half">      
            <Img fluid={left.node.fluid} outerWrapperClassName="carousel-left-image"/>
        </div>
        <div className="column is-half">         
            <Img fluid={right.node.fluid} outerWrapperClassName="carousel-right-image"/>  
        </div>          
    </animated.div>
    )
}

export default Slide
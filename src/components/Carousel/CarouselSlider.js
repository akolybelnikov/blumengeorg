import React from "react"
import Slider from "react-slick"
import Slide from './Slide'

export default class CarouselSlider extends React.Component {

    render() {
        const {images} = this.props
        var settings = {
            className: `outer-slider`,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 7000,
            lazyLoad: `progressive`,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: `15px`
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {images && images.map(image => <Slide key={image.node.id} image={image.node.fluid}/>)}
            </Slider>
        )
    }
}
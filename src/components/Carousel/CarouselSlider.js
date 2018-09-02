import React from "react"
import Slider from "react-slick"
import Slide from './Slide'

export default class CarouselSlider extends React.Component {

    render() {
        const {images} = this.props
        var settings = {
            className: `outer-slider`,
            infinite: true,
            speed: 500,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 5000,
            lazyLoad: `progressive`,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        fade: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
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
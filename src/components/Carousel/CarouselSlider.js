import React, {Component} from "react"
import Slider from "react-slick"
import Slide from './Slide'
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'
import Responsive from 'react-responsive'

const Mobile = props => <Responsive {...props} maxWidth={823}/>
const Default = props => <Responsive {...props} minWidth={824}/>

function NextArrow(props) {
    const {style, onClick} = props;
    return (
        <div
            className="slick-arrow-right"
            style={{
            ...style,
            right: '20px',
            zIndex: 100,
            position: 'absolute',
            top: '50%',
            lineHeight: 0,
            cursor: 'pointer'
        }}
            onClick={onClick}>
            <Mobile><ChevronRight width="30px" height="30px" color="lightgrey"/></Mobile>
            <Default><ChevronRight width="50px" height="50px" color="lightgrey"/></Default>
        </div>
    );
}

function PrevArrow(props) {
    const {style, onClick} = props;
    return (
        <div
            className="slick-arrow-left"
            style={{
            ...style,
            left: '20px',
            zIndex: 100,
            position: 'absolute',
            top: '50%',
            lineHeight: 0,
            cursor: 'pointer'
        }}
            onClick={onClick}>
            <Mobile><ChevronLeft width="30px" height="30px" color="lightgrey"/></Mobile>
            <Default><ChevronLeft width="50px" height="50px" color="lightgrey"/></Default>
        </div>
    );
}

export default class CarouselSlider extends Component {

    render() {
        const {images} = this.props
        var settings = {
            className: `outer-slider`,
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 7000,
            lazyLoad: `progressive`,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: `15px`
                    }
                }, {
                    breakpoint: 768,
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
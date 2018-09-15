import React from 'react'
import {Parallax} from 'react-spring'
import LazyLoad from 'react-lazy-load'

import Carousel from '../Carousel/Carousel'
import Categories from '../Categories/Categories'
import Letters from '../Letters'
import IconXmasCat from '../icons/IconXmasCat'
import roses from '../images/roses.svg'
import hibiscus from '../images/hibiscus.png'
import dahlia from '../images/dahlia.png'
import ParallaxLayer from '../ParallaxLayer'

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

                <ParallaxLayer
                    offset={0.15}
                    speed={-1}
                    backgroundposition={'top 75% left 0'}
                    backgroundsize={'50%'}
                    backgroundrepeat={'repeat-x'}
                    height={'75vh'}/>

                <Parallax.Layer
                    style={{
                    scrollBehavior: 'smooth'
                }}
                    offset={0.18}
                    speed={0.3}>
                    <Carousel/>
                </Parallax.Layer>

                <Parallax.Layer
                    style={{
                    scrollBehavior: 'smooth'
                }}
                    offset={0.96}
                    speed={-0.1}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <IconXmasCat width="100"/>
                        <Letters maxWidth="85%" width="7%" fill="rgba(101,55,148,1)"/>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    style={{
                    scrollBehavior: 'smooth',
                    opacity: 0.5
                }}
                    offset={1.8}
                    speed={0.6}
                    onClick={() => this.parallax.scrollTo(2)}>
                    <LazyLoad>
                        <img
                            alt=""
                            src={hibiscus}
                            style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '85%'
                        }}/>
                    </LazyLoad>
                    <LazyLoad>
                        <img
                            alt=""
                            src={dahlia}
                            style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%'
                        }}/>
                    </LazyLoad>
                    <LazyLoad>
                        <img
                            alt=""
                            src={roses}
                            style={{
                            display: 'block',
                            width: '15%',
                            marginLeft: '45%'
                        }}/>
                    </LazyLoad>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={1}
                    style={{
                    scrollBehavior: 'smooth'
                }}>
                    <div style={{
                        marginTop: '10%'
                    }}><Categories/></div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={1}
                    style={{
                    scrollBehavior: 'smooth'
                }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <div style={{
                        height: 200
                    }}></div>
                </Parallax.Layer>

            </Parallax>
        )
    }

}

export default ParallaxPage
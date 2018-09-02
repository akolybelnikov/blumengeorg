import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ErrorBoundary from '../ErrorBoundary'
import LazyLoad from 'react-lazy-load'

import ArrowCircleRight from '../icons/ArrowCircleRight'
import './Categories.scss'

const Widget = ({title, image}) => {
    return (
        <ErrorBoundary>
            <LazyLoad offsetBottom={100}>
                <Link to={`${title}`}>
                    <div className="box widget-card">
                        <div className="card">
                            <div className="card-header">
                                <p className="is-capitalized card-header-title">{title}</p>
                            </div>
                            <div className="card-image">
                                <Img fluid={image}/>
                            </div>
                            <div className="card-footer">
                                <div className="card-footer-item">
                                    <ArrowCircleRight color={'rgba(255,255,255,.5)'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </LazyLoad>
        </ErrorBoundary>
    )
}

export default Widget
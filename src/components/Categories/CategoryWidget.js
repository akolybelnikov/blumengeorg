import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ErrorBoundary from '../ErrorBoundary'
import LazyLoad from 'react-lazy-load'
import Responsive from 'react-responsive'

import ArrowCircleRight from '../icons/ArrowCircleRight'
import './Categories.scss'

const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

const Widget = ({title, image}) => {
    return (
        <ErrorBoundary>
            <Mobile>
                <LazyLoad offsetVertical={200}>
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
            </Mobile>
            <Default>
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
            </Default>
        </ErrorBoundary>
    )
}

export default Widget
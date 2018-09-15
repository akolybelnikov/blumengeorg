import React from 'react'
import './Product.scss'
import Img from 'gatsby-image'

const ProductCard = (props) => {
    const { fluid, title, priceS, priceM, priceL } = props
    return (
        <div className="box product-box">
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <Img fluid={fluid}/>
                    </figure>
                </div>
                <div className="card-content">
                {title}
                </div>
                <div className="card-footer">
                <p className="card-footer-item">EUR {priceS}</p>
                <p className="card-footer-item">EUR {priceM}</p>
                <p className="card-footer-item">EUR {priceL}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
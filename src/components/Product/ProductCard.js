import React from 'react'
import './Product.scss'
import Img from 'gatsby-image'

const ProductCard = (props) => {
    const { fluid, title, priceS, priceM, priceL } = props
    return (
        <div className="box product-box">
            <div className="card">
                <div class="card-image">
                    <figure class="image">
                        <Img fluid={fluid}/>
                    </figure>
                </div>
                <div className="card-content">
                {title}
                </div>
                <div className="card-footer">
                <p className="card-footer-item">{priceS}</p>
                <p className="card-footer-item">{priceM}</p>
                <p className="card-footer-item">{priceL}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
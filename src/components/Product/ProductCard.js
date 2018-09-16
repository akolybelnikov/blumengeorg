import React from 'react'
import './Product.scss'
import Img from 'gatsby-image'

const ProductCard = (props) => {
    const {fluid, title, priceS, priceM, priceL} = props
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
                    {priceS && <p className="card-footer-item is-size-6-mobile">klein ca. &#8364; {priceS}</p>}
                    {priceM && <p className="card-footer-item is-size-6-mobile">mittel ca. &#8364; {priceM}</p>}
                    {priceL && <p className="card-footer-item is-size-6-mobile">gross ca. &#8364; {priceL}</p>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
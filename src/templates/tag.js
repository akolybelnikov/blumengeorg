import React, {Component} from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import ProductCard from '../components/Product/ProductCard'
import './tag.scss'
import EmptyPage from '../components/EmptyPage/EmptyPage'
import Phone from '../components/icons/Phone'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import LazyLoad from 'react-lazy-load'

export default class ProductPage extends Component {
    render() {
        return (
            <Layout location={this.props.location} justifyContent={'center'}>
                <Breadcrumb pathname={this.props.location.pathname}/>
                <section id="products-section" className="section">
                    {this.props.data.allContentfulProduct
                        ? this
                            .props
                            .data
                            .allContentfulProduct
                            .edges
                            .map(edge => (
                                <LazyLoad
                                    offsetVertical={300}
                                    key={edge.node.id}
                                    className="product-section-item">
                                    <ProductCard
                                        priceS={edge.node.priceS}
                                        priceM={edge.node.priceM}
                                        priceL={edge.node.priceL}
                                        title={edge.node.name}
                                        fluid={edge.node.img.fluid}/>
                                </LazyLoad>
                            ))
                        : <EmptyPage/>
}
                </section>
                <a
                    href="tel:00491797319455"
                    className="button is-primary is-outlined is-inverted level-item is-hidden-tablet"
                    style={{
                    margin: '0 auto'
                }}
                    aria-label="telephone number of Blumen Georg">
                    <span className="icon">
                        <Phone width="24" height="24" fill="whitesmoke"/>
                    </span>
                    <span>Eine Bestellung besprechen</span>
                </a>
            </Layout>
        )
    }

}

export const query = graphql `
  query($slug: String!) {
    allContentfulProduct(filter: { tag: { slug: { eq: $slug } } }) {
      edges {
          node {
              tag {
                  slug
              }
              name
              id
              priceS
              priceM
              priceL
              img {
                  id
                  title
                  fluid(maxWidth: 700) {
                    ...GatsbyContentfulFluid_withWebp
                }
              }
          }
      }
    }
  }
`

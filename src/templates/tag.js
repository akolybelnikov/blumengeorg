import React, {Component} from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import ProductCard from '../components/Product/ProductCard'
import './tag.scss'
import EmptyPage from '../components/EmptyPage/EmptyPage'

export default class ProductPage extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <section id="products-section" className="section">
                    {this.props.data.allContentfulProduct
                        ? this.props.data
                            .allContentfulProduct
                            .edges
                            .map(edge => (
                                <div key={edge.node.id} className="product-section-item">
                                    <ProductCard
                                        priceS={edge.node.priceS}
                                        priceM={edge.node.priceM}
                                        priceL={edge.node.priceL}
                                        title={edge.node.name}
                                        fluid={edge.node.img.fluid}/>
                                </div>
                            ))
                        : <EmptyPage/>
                    }
                </section>
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

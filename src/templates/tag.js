import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"

// const filter = require('lodash.filter')
// const some = require('lodash.some')

export default ({data}) => {

    return (        
        <Layout>
            <div>
                {data.allContentfulProduct && data.allContentfulProduct.edges.map(edge => (
                    <h1 key={edge.node.id}>{edge.node.tag[0].slug}</h1>
                ))}
            </div>
        </Layout>
    )
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
                  sizes(maxWidth: 900) {
                      src
                      base64
                      aspectRatio
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                  }
              }
          }
      }
    }
  }
`

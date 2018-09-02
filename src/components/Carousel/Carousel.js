import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CarouselSlider from './CarouselSlider'

const Carousel = () => (
    <StaticQuery
      query = {graphql`
        query carouselImagesQuery {
          allContentfulAsset(limit: 8 filter: { title: {eq: "frontpage" } }) {
            edges {
              node {
                id
                title
                fluid(maxWidth: 700) {
                    ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      `}  
      render = {data => (
          <CarouselSlider images={data.allContentfulAsset.edges} />
      )}
    />  
)

export default Carousel

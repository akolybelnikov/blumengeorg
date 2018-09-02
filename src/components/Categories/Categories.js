import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import CategoryWidgets from './CategoryWidgets'
import './Categories.scss'

const Categories = () => {
    return (
        <StaticQuery
            query = {graphql`
                query categoriesWidgetsQuery {
                allContentfulAsset(limit: 4 filter: { title: {eq: "widget" } }) {
                    edges {
                    node {
                        id
                        description
                        fluid(maxWidth: 700) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    }
                }
                }
            `}  
            render = {data => (
                <section id="categories-section" className="section"><CategoryWidgets widgets={data.allContentfulAsset.edges} /></section>
            )}
        />  
    )

}

export default Categories
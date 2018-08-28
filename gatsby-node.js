/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allContentfulTag {
            edges {
              node {
                slug
              }
            }
          }        
        }
      `).then(result => {
        result.data.allContentfulTag.edges.map(({ node }) => {
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug
            },
          })
        })
        resolve()
      })
    })
  }
  

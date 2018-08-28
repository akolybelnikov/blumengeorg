/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// import React from "react"
// import {renderToString} from "react-dom/server"
// import {ServerStyleSheet, StyleSheetManager} from "styled-components"
// import LoadingScreen from "react-loading-screen"

// exports.replaceRenderer = ({bodyComponent, replaceBodyHTMLString, setHeadComponents}) => {
//     const sheet = new ServerStyleSheet()

//     const app = () => (
//         <LoadingScreen
//             loading={true}
//             bgColor='#000'
//             spinnerColor='#663399'
//             textColor='#663399'
//             logoSrc='./src/images/logo-lg.png'
//             text='Here an introduction sentence (Optional)'>
//             <StyleSheetManager sheet={sheet.instance}>
//                 {bodyComponent}
//             </StyleSheetManager>
//         </LoadingScreen>
//     )
//     replaceBodyHTMLString(renderToString(<app/>))
//     setHeadComponents([sheet.getStyleElement()])
// }

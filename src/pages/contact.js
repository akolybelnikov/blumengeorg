import React from 'react'
import Layout from '../components/layout'
import GoogleMap from '../components/ContactDetails/GoogleMap'

const ContactPage = (props) => {
    return (
        <Layout location={props.location}>
            <GoogleMap />
        </Layout>
    )
}

export default ContactPage

import React from 'react'
import Layout from '../components/layout'
import GoogleMap from '../components/ContactDetails/GoogleMap'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const ContactPage = (props) => {
    return (
        <Layout justifyContent={'flex-start'} location={props.location}>
            <Breadcrumb pathname={props.location.pathname} />
            <GoogleMap />
        </Layout>
    )
}

export default ContactPage

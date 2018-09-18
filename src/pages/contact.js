import React from 'react'
import Layout from '../components/layout'
import GoogleMap from '../components/ContactDetails/GoogleMap'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import './contact.css'

const ContactPage = (props) => {
    return (
        <Layout justifyContent={'flex-start'} location={props.location}>
            <div id="breadcrumb-container"><Breadcrumb pathname={props.location.pathname} /></div>
            <GoogleMap />
        </Layout>
    )
}

export default ContactPage

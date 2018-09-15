import React from 'react'
import './Address.scss'
import Envelope from '../icons/Envelope'

const Email = props => {
    return (
        <div id="email-container">
            <div id="icon-envelope">
                <Envelope width="24" height="24" fill="whitesmoke"/>
            </div>
            <a id="email-address" href="mailto:blumengeorg@gmail.com">blumengeorg@gmail.com</a>
        </div>
    )
}

export default Email
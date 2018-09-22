import React from 'react'
import './Address.scss'
import Envelope from '../icons/Envelope'

const Email = props => {
    return (
        <div id="email-container">
            <a
                id="email-address"
                className="button is-primary is-inverted is-outlined is-fullwidth"
                href="mailto:blumengeorg@gmail.com">
                <span style={{marginRight: '10px'}} className="icon">
                    <Envelope width="24" height="24" fill="whitesmoke"/>
                </span>
                <span>georgsblumen1@gmail.com</span>
            </a>
        </div>
    )
}

export default Email
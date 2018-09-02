import React from 'react'
import ChevronLeft from './icons/ChevronLeft'

const NavigateBack = (props) => {
    const { location } = props
    return (
        <div
            style={{
            alignSelf: 'flex-start',
            width: '100%'
        }}
            className="level">
            <button
                onClick={() => {
                console.log(location)
            }}
                className="button is-medium is-primary is-pulled-left">
                <span class="icon">
                    <ChevronLeft color={'rgba(255,255,255,.5)'}/>
                </span>
            </button>
        </div>
    )
}

export default NavigateBack
import React from 'react'

const Square = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50"
            height="50"
            viewBox="0 0 100 100">
            <g>
                <g
                    transform="translate(50 50) scale(0.69 0.69) rotate(0) translate(-50 -50)"
                    fill="whitesmoke">
                    <svg
                        fill="whitesmoke"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlSpace="preserve"
                        version="1.1"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        viewBox="0 0 510 513"
                        x="0px"
                        y="0px"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <g>
                            <path
                                fill="whitesmoke"
                                fillRule="nonzero"
                                d="M510 0l0 513 -510 0 0 -513 510 0zm-18 17l-475 0 0 479 475 0 0 -479z"></path>
                        </g>
                    </svg>
                </g>
            </g>
        </svg>
    )
}

export default Square
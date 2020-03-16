import React from 'react'
import './error-indicator.css'
import icon from "./death-star.png"

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div>
                <img src={icon} alt="error-icon" className="error-icon"/>
            </div>
            <span className="boom">BOOM!</span>
            <span>
                something has gon terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator
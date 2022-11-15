import React, { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div id="landing-page-container">
        <Link to='/home' id='home-button'>Ingresar</Link>
        </div>
    )


}

export default LandingPage
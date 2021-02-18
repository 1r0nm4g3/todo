import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer--copyright">2021 Copyright Still River. All Rights Reserved</div>
            <div className="footer--links">
                <Link to="/terms">Terms of Service</Link> -&nbsp;
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer

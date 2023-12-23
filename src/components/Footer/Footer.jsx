import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <footer className='app-footer'>
            <div className="footer-container">
                <div className="copyrights">
                    <small>Employees Pair Tracking App © 2023</small>
                </div>
                <div className="version">
                    <small>
                        <span>Version: 1.0.0.0</span>
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
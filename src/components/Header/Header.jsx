import React from 'react';
import "./Header.css"
import logo from '../../assets/report.png'
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="app-header">
            <div className="header-logo">
                <Link to="/"><img className="app-logo" src={logo} alt={"app-logo"}/></Link>
            </div>
            <div className="header-info">
                <h1>Employees Pairs Tracking App</h1>
                <p>Our useful application identifies the pair of employees who have worked together on common projects
                    for the longest period of time and the time for each of those projects.
                </p>
                <p>Try it for free and discover many additional features.</p>
            </div>
        </header>
    );
}

export default Header;
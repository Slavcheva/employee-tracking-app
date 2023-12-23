import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./SubMenu.css"
import upload from "../../assets/cloud-computing.png";
import dots from "../../assets/dots.png";

function SubMenu() {
    const [show, setShow] = useState(false);

    return (
        <div className="sub-menu">
            <span className="sub-menu-link">
            {show && <Link to="/" className="home-link"><img src={upload} alt="upload"/></Link>}
             </span>
            <span className="sub-menu-img">
                 <img src={dots} alt="dots" onClick={() => setShow(!show)}/>
            </span>
        </div>);
}

export default SubMenu;
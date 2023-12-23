import React from 'react';
import "./Feature.css"

function Feature({image, title}) {
    return (
        <li className="feature-item">
                <div className="feature-icon"><img src={image} alt={title}/>
                </div>
                <h3 className="feature-title">{title}</h3>
        </li>
    );
}

export default Feature;
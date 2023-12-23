import React from 'react';
import "./ToggleButton.css"
import up from "../../assets/angle-up.png";
import down from "../../assets/angle-down.png";

function ToggleButton({id, elementId, open, toggleTable, msg = 'All common projects for these employees'}) {

    return (
        <div className="top item-field-id">
            <div>{msg}</div>
            <div className="toggle-btn">
                <div className="arrow-btns" onClick={toggleTable}
                     id={elementId}>
                    {(open && id === elementId) ? (
                        <img src={up} alt="up-arrow"/>
                    ) : (
                        <img src={down} alt="down-arrow"/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ToggleButton;
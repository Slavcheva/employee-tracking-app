import React from 'react';
import up from "../../assets/angle-up.png";
import down from "../../assets/angle-down.png";

function ToggleButton({id, elementId, open, toggleTable, msg}) {

    return (
        <div className="top item-field-id">
            {msg
                ? <div>{msg}</div>
                : <div>All common projects for these employees</div>
            }
            <div className="project-btns">
                <div className="project-btn arrow-btn" onClick={toggleTable}
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
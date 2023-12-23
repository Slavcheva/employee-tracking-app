import React, {useContext} from "react";
import {FileContext} from "../../../contexts/FileContext";
import "./ErrorMessages.css"

function ErrorMessages() {

    const {errors} = useContext(FileContext);

    return (<>
        {!!errors.length &&
        <div className="error-section">
            <h3>Error Messages</h3>
            <div className="error-msg inside-msg">
                {errors.map((error) => <div key={error}>{error}</div>)}
            </div>
        </div>
        }
    </>);
}

export default ErrorMessages;
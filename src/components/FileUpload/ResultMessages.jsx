import React, {useContext} from "react";
import {FileContext} from "../../contexts/FileContext";

function ResultMessages() {
    const {status} = useContext(FileContext);

    const statusResult = {
        "initial": <p>No selected file!</p>,
        "success": <p>✅ File uploaded successfully!</p>,
        "fail": <p>❌ File upload failed!</p>,
        "uploading": <p>⏳ Uploading selected file...</p>
    }
    return statusResult[status] || null
}
export default ResultMessages
import React, {useContext} from "react";
import {FileContext} from "../../../contexts/FileContext";
import "./FileUploader.css"
import ResultMessages from "../ResultMessages";
import uploadIcon from "../../../assets/upload.png";
import fileIcon from "../../../assets/csv.png";
import trashIcon from "../../../assets/delete.png";
import ErrorMessages from "../ErrorMessages/ErrorMessages";

function FileUploader() {

    const {handleFileUpload} = useContext(FileContext);
    const {handleFileDelete} = useContext(FileContext);
    const {file} = useContext(FileContext);
    const {status} = useContext(FileContext);
    const {errors} = useContext(FileContext);

    return (
        <section className="info-section">
            <h2>Getting Started</h2>
            <p>Just upload csv file with your data in the field bellow.</p>
            <div className="upload-for sub-section">
                <form onClick={() => document.querySelector(".input-field").click()}>
                    <input type="file" accept='text/csv' className='input-field' hidden
                           onChange={handleFileUpload}
                    />
                    <img className="upload-icon" src={uploadIcon} alt="upload"/>
                    <p>Browse File to upload</p>
                </form>

                <div className='uploaded-row'>
                    <ResultMessages status={status}/>
                    {file && (<>
                    <span className="file-name">
                        <img className="file-icon" src={fileIcon} alt="file-icon"/>
                        {file.name}
                        <button className="trash-btn" onClick={handleFileDelete}>
                            <img className="trash-icon" src={trashIcon} alt={"trash-bin"}/>
                        </button>
                    </span>
                    </>)}
                </div>
                <ErrorMessages errors={errors}/>
            </div>
        </section>

    );
}

export default FileUploader;
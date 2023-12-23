import React, {useContext} from 'react';
import {FileContext} from "../../contexts/FileContext";
import SubMenu from "../../components/SubMenu/SubMenu";
import Table from "../../components/Table/Table";

function InputDataPage({data}) {
    const {file} = useContext(FileContext);

    const headings = [
        "EmpID",
        "ProjectID",
        "DateFrom",
        "DateTo",
    ]

    return (<>
        <div className="info-section">
            <h2>Input Data</h2>
            <p>You can see the data from your csv file.</p>
        </div>

        <div className="sub-section">
            <SubMenu/>
            {!!file

                ? <div className="projects"><Table headings={headings} data={data} id="id"/></div>
                : <div>Please upload your csv file to see the data!</div>
            }
        </div>
    </>);
}

export default InputDataPage;
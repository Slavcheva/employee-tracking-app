import React, {useContext} from 'react';
import "./HomePage.css";
import FileUploader from "../../components/FileUpload/FileUploader/FileUploader";
import {FileContext} from "../../contexts/FileContext";
import TopPairMessages from "../../components/TopPairMessages/TopPairMessages";

function HomePage({topPartners}) {

    const {file} = useContext(FileContext);

    return (
        <div className="home-page">
            <FileUploader/>
            <section className="sub-section">
                {!!file
                    ? <>
                        <TopPairMessages data={topPartners}/>
                        {!!topPartners.length &&
                        topPartners.map((row) => {
                            return (
                                <div className="inside-msg" key={row.pair.join(" ")}>
                                    <div className="row-mgs">
                                        <h6>The pair of employees and the longest
                                            period <span>(empId1, empId2, days)</span>:</h6>
                                        <div>{row.pair.join(", ")}, {row.total}</div>
                                    </div>
                                    <div className="row-mgs">
                                        <h6>All their shared projects and the respective
                                            periods <span>(projId, days)</span>:</h6>
                                        {row.projectsObj.map(pr => <div key={pr.project}>{pr.project}, {pr.days}</div>)}
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    : <div>Please upload your csv file to see the data!</div>
                }
            </section>
        </div>
    );
}

export default HomePage;
import React, {useState, useContext} from 'react';
import {FileContext} from "../../contexts/FileContext";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import Table from "../../components/Table/Table";
import SubMenu from "../../components/SubMenu/SubMenu";

function ProjectsPage({projects}) {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const {file} = useContext(FileContext);

    const headings = ["Date", "Employees"];

    function toggleTable(e) {
        e.currentTarget.id ? setId(e.currentTarget.id) : setId(null)
        setOpen(!open)
    }

    return (<>
            <div className="info-section">
                <h2>Projects</h2>
                <p>You can view all projects from your file data and the employees who have worked on them.</p>
            </div>
            <div className="sub-section">
                <SubMenu/>
                {!!file ?
                    <div className="projects">
                        {projects.map((project, index) => {
                            return (
                                <div key={project.projID} className="item-field">

                                    <div className="project-id-field item-field-id">
                                        <div>ProjID: {project.projID}</div>
                                        <div className="toggle-btn-btn">
                                            <ToggleButton id={id}
                                                          elementId={project.projID}
                                                          toggleTable={toggleTable}
                                                          open={open}
                                                          msg={"All work dates for the project"}
                                            />
                                        </div>
                                    </div>

                                    {(open && id === project.projID) && (
                                        <Table
                                            data={project.projCalendar.map(row => [row.date, row.employees.join(", ")])}
                                            headings={headings} id={project.projID + "*" + index}
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    : <div>Please upload your csv file to see the data!</div>}
            </div>
        </>

    );
}

export default ProjectsPage;
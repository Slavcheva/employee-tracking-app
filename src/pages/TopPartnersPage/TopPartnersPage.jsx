import React, {useContext, useState} from 'react';
import {FileContext} from "../../contexts/FileContext";
import SubMenu from "../../components/SubMenu/SubMenu";
import TopPairMessages from "../../components/TopPairMessages/TopPairMessages";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import ToggleButton from "../../components/ToggleButton/ToggleButton";


function TopPartnersPage({topPartners}) {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const [search, setSearch] = useState('');

    const {file} = useContext(FileContext);

    const projHeadings = ["Project", "Days"];
    const empHeadings = ["EmpIDs", "The longest period of days they worked together"];

    function toggleTable(e) {
        e.currentTarget.id ? setId(e.currentTarget.id) : setId(null)
        setOpen(!open)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (<>
            <div className="info-section">
                <h2>Top Partners</h2>
                <p>You can view the pairs of employees who have worked together on common projects for the longest period, along with the duration of each of those projects.</p>
            </div>

            <div className="sub-section">
                <SubMenu/>
                {!!file ?
                    <div>
                        <TopPairMessages topPartners={topPartners}/>
                        <div className="search-pairs">
                            <Search handleChange={handleChange}
                                    placeholder="Search by employees ids"/>
                        </div>

                        {!!topPartners.length &&
                        topPartners.filter((row) => {
                            return search === ''
                                ? row
                                : row.pair.join(" ").includes(search)
                        }).map((row, index) => {

                            return (
                                <div key={row.pair.join(" ")} className="item-field">
                                    <Table data={[[row.pair.join(", "), row.total.toString()]]} headings={empHeadings}
                                           id={row.pair.join(", ")}/>

                                    <ToggleButton id={id} elementId={row.pair.join(", ")} toggleTable={toggleTable}
                                                  open={open}/>

                                    {(open && id === row.pair.join(", ")) && (
                                        <Table data={row.projectsObj.map(pr => [pr.project, pr.days])}
                                               headings={projHeadings} id={row.pair.join(", ") + "*" + index}/>
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

export default TopPartnersPage;
import React, {useContext, useState} from 'react';
import {FileContext} from "../../contexts/FileContext";
import Table from "../Table/Table";
import ToggleButton from "../ToggleButton/ToggleButton";
import SubMenu from "../SubMenu/SubMenu";
import TopPairMessages from "../TopPairMessages/TopPairMessages";
import Search from "../Search/Search";

function PairsComponents({data, empHeadings, projHeadings, pageTopMsg}) {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const [search, setSearch] = useState('')

    const {file} = useContext(FileContext);


    function toggleTable(e) {
        e.currentTarget.id ? setId(e.currentTarget.id) : setId(null)
        setOpen(!open)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };


    return (<div className="sub-section">
            <SubMenu/>
            {!!file ?
                <>
                    <TopPairMessages data={data} pageTopMsg={pageTopMsg}/>
                    {!!data.length && <>
                        <div className="search-pairs">
                            <Search handleChange={handleChange}
                                    placeholder="Search by employees ids"/>
                        </div>

                        {data.filter((row) => {
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
                                </div>)
                        })}

                    </>}
                </>
                : <div>Please upload your csv file to see the data!</div>}
        </div>
    );
}

export default PairsComponents;
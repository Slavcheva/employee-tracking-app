import React, {useState} from 'react';
import "./Table.css"
import Search from "../Search/Search";
import TableRow from "./TableRow/TableRow";

function Table({data, headings, id}) {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <div className="table-wrapper">
            <Search handleChange={handleChange}/>
            <table>
                <thead>
                <TableRow type={"heading"} rowData={headings} i={id}/>
                </thead>
                <tbody>
                {data.filter((row) => {
                    return search === ''
                        ? row
                        : row.some((cell) => cell.includes(search))
                }).map((row, index) => {
                    return <TableRow key={id+index} type={'cell'} rowData={row} i={id+index} />
                })
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
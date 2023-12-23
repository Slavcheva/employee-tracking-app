import React from 'react';
import "./TableCell.css";

function TableCell({
                       value,
                       type = 'cell'
                   }) {

    if (type === 'heading') {
        return <th>{value}</th>;
    }

    return <td>{value}</td>;
}

export default TableCell;
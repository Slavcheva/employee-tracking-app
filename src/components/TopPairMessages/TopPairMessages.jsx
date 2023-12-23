import React from 'react';

function TopPairMessages({data, pageTopMsg=""}) {

    const messageArr = {
        0: `There is no employees working together on common projects in your file!`,
        1: `The pair of employees working together on common projects${pageTopMsg}`,
    }

    return (
        <div className="table-msg">
            {messageArr[data.length] ||
            `Multiple pairs of employees working together on common projects${pageTopMsg}`
            }
        </div>);
}

export default TopPairMessages;
import React from 'react';

function TopPairMessages({data}) {

    const messageArr = {
        0: "There is no employees working together on common projects in your file!",
        1: "The pair of employees working together on common projects for the longest period:",
    }

    return (
        <div className="table-msg">
            {messageArr[data.length] ||
            "There are more than one pair of employees working together on common projects for the longest period:"
            }
        </div>);
}

export default TopPairMessages;
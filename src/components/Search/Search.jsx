import React from 'react';
import "./Search.css"

function Search({handleChange, placeholder="Search in this table"}) {

    return <div className="search-bar">
        <input
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
            />
    </div>
}

export default Search;
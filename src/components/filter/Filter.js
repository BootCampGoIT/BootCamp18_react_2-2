import React from 'react'

const Filter = ({ filterByName }) => {
    return (
        <div>
            <h2>Find contact by name</h2>
            <input type="text" onChange={filterByName} />
        </div>
    );
}

export default Filter;
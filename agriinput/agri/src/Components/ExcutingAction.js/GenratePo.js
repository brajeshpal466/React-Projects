// this link is have access   to their title of work and link to get listheader link
// like expand and collepse of table
import React from 'react'
import ListComponents from './ListComponents'
function GenratePo() {
    return (
        <div className="genrateop-list-container">
            <div className="genrateop-heading">
                <b>Executing Agri-input orders</b><b>Bached by</b>
            </div>
            <div>
                <ListComponents></ListComponents>
            </div>
        </div>
    )
}

export default GenratePo

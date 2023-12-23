import React from 'react';
import PairsComponents from "../../components/PairsComponent/PairsComponents";

function AllPartnersPage({partners}) {

    const projHeadings = ["Project", "Days"];
    const empHeadings = ["EmpIDs", "All days working together"];

    return (<>
            <div className="info-section">
                <h2>All Partners</h2>
                <p>You can view all pairs of employees who have worked together on common projects, along with the duration of each of those projects.</p>
            </div>
            <PairsComponents empHeadings={empHeadings} projHeadings={projHeadings} data={partners}/>
        </>
    );
}

export default AllPartnersPage;
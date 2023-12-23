import React from 'react';
import PairsComponents from "../../components/PairsComponent/PairsComponents";


function TopPartnersPage({topPartners}) {

    const projHeadings = ["Project", "Days"];
    const empHeadings = ["EmpIDs", "The longest period of days they worked together"];

    return (<>
            <div className="info-section">
                <h2>Top Partners</h2>
                <p>You can view the pair of employees who have worked together on common projects for the longest
                    period, along with the duration of each of those projects.</p>
            </div>
            <PairsComponents empHeadings={empHeadings} projHeadings={projHeadings} data={topPartners} pageTopMsg={" for the longest period"}/>

        </>
    );
}

export default TopPartnersPage;
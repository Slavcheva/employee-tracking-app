import {NavLink} from "react-router-dom";
import "./Features.css";
import pair from "../../../assets/team-management.png";
import partners from "../../../assets/organization.png"
import projects from "../../../assets/business-report.png"
import input from "../../../assets/teamwork.png"
import Feature from "../Feature/Feature";

function Features() {

    return (<section className="features-section">

            <div className="features-section-info">
                <h2>Application Main Features</h2>
                <p>Identify the longest-working colleagues and list all their shared projects along with the respective periods they worked on these projects. Explore all projects from your file data and the employees who have contributed to them.</p>
            </div>


            <ul className="features-list">
                <NavLink to="/top-partners"
                         className={({isActive}) => (isActive ? "feature-link active" : "feature-link")}>
                    <Feature title={"Top Partners"} image={pair}/>
                </NavLink>
                <NavLink to="/partners"
                         className={({isActive}) => (isActive ? "feature-link active" : "feature-link")}>
                    <Feature title={"Partners"} image={partners}/>
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => (isActive ? "feature-link active" : "feature-link")}>
                    <Feature title={"Projects"} image={projects}/>
                </NavLink>
                <NavLink to="/input-data"
                         className={({isActive}) => (isActive ? "feature-link active" : "feature-link")}>
                    <Feature title={"Input Data"} image={input}/>
                </NavLink>
            </ul>
        </section>
    );
}

export default Features;
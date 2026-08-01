import { NavLink } from "react-router-dom";
import { KNOWLEDGE_HUB_SECTIONS } from "../../../config/knowledgeHub";
import "../../../styles/knowledgeHub/KnowledgeHubNavigation.css";

function KnowledgeHubNavigation() {

    return (

        <nav className="knowledge-hub-navigation">

            <div className="container">

                <div className="knowledge-hub-navigation-links">

                    {KNOWLEDGE_HUB_SECTIONS.map(section => (

                        <NavLink
                            key={section.id}
                            to={section.route}
                            className={({ isActive }) =>
                                isActive
                                    ? "hub-nav-link active"
                                    : "hub-nav-link"
                            }
                        >

                            {section.title}

                        </NavLink>

                    ))}

                </div>

            </div>

        </nav>

    );

}

export default KnowledgeHubNavigation;
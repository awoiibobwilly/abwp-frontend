import { Outlet } from "react-router-dom";

import KnowledgeHubHero from "../hero";
import KnowledgeHubNavigation from "../navigation";
import KnowledgeHubBody from "./KnowledgeHubBody";

import "../../../styles/knowledgeHub/knowledgeHubShell.css";

function KnowledgeHubShell() {

    return (

        <div className="knowledge-hub-shell">

            <KnowledgeHubHero />

            <KnowledgeHubNavigation />

            <main className="knowledge-hub-main">

                <KnowledgeHubBody>

                    <Outlet />

                </KnowledgeHubBody>

            </main>

        </div>

    );

}

export default KnowledgeHubShell;
import { Outlet } from "react-router-dom";

import "../styles/layouts/knowledgeHubLayout.css";

function KnowledgeHubLayout() {

    return (

        <section className="knowledge-hub-layout">

            <Outlet />

        </section>

    );

}

export default KnowledgeHubLayout;
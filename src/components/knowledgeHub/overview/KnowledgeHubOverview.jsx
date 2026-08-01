import SectionHeader from "../../common/SectionHeader";

import "../../../styles/knowledgeHub/knowledgeHubOverview.css";

function KnowledgeHubOverview() {

    return (

        <section className="knowledge-hub-overview">

            <div className="container">

                <SectionHeader

                    badge="Knowledge Hub"

                    title="Explore Curated Knowledge"

                    description="Discover research contributions, professional insights, practical resources and learning materials developed through multidisciplinary experience in healthcare, technology, leadership and innovation."

                />

            </div>

        </section>

    );

}

export default KnowledgeHubOverview;
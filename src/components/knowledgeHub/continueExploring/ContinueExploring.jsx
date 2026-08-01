import SectionHeader from "../../common/SectionHeader";
import ResearchContributionGrid from "../research/ResearchContributionGrid";

import "../../../styles/knowledgeHub/continueExploring.css";

function ContinueExploring() {

    return (

        <section className="continue-exploring">

            <div className="container">

                <SectionHeader

                    badge="Next Reads"

                    title="Continue Exploring"

                    description="Continue your journey by exploring more research contributions and multidisciplinary insights."

                />

                <ResearchContributionGrid

                    limit={3}

                />

            </div>

        </section>

    );

}

export default ContinueExploring;
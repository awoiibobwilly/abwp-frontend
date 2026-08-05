import { useMemo } from "react";

import createResearchViewModel from "../../hub/viewModels/researchViewModel";

import ResearchReadingProgress from "./ResearchReadingProgress";
import ResearchHeader from "./ResearchHeader";
import ResearchSidebar from "./ResearchSidebar";
import ResearchContent from "./ResearchContent";
import ResearchRelated from "./ResearchRelated";

import "../../../../styles/knowledgeHub/researchDetailView.css";

function ResearchDetailView({ research }) {

    const viewModel = useMemo(
        () => createResearchViewModel(research),
        [research]
    );

    if (!viewModel) {
        return null;
    }

    return (

        <>
            {/* ==========================================
                READING PROGRESS
            ========================================== */}

            <ResearchReadingProgress />


            {/* ==========================================
                RESEARCH READER
            ========================================== */}

            <section className="research-detail">

                <div className="container">

                    {/* ==========================================
                        HEADER
                    ========================================== */}

                    <ResearchHeader
                        research={viewModel}
                    />

                    {/* ==========================================
                        ARTICLE + SIDEBAR
                    ========================================== */}

                    <div className="research-detail-container">

                        <main className="research-detail-content">

                            <ResearchContent
                                research={viewModel}
                            />

                        </main>

                        <aside className="research-detail-sidebar">

                            <ResearchSidebar
                                author={viewModel.author}
                                publication={viewModel.publicationInfo}
                                statistics={viewModel.statistics}
                                actions={viewModel.actions}
                            />

                        </aside>

                    </div>

                    {/* ==========================================
                        CONTINUE READING
                    ========================================== */}

                    <ResearchRelated
                        publications={viewModel.relatedPublications}
                    />

                </div>

            </section>

        </>

    );

}

export default ResearchDetailView;
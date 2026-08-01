import { useMemo } from "react";

import createResearchViewModel from "./viewModels/researchViewModel";

import ResearchReadingProgress from "./ResearchReadingProgress";
import ResearchBreadcrumbs from "./ResearchBreadcrumbs";
import ResearchHeader from "./ResearchHeader";
import ResearchSidebar from "./ResearchSidebar";
import ResearchContent from "./ResearchContent";
import ResearchRelated from "./ResearchRelated";

/* ==========================================
   KNOWLEDGE HUB COMPONENTS
========================================== */

import PublicationsArchive from "../PublicationsArchive";
import HubSearch from "../HubSearch";

import UniversalCTA from "../../common/UniversalCTA/UniversalCTA";


import "../../../styles/knowledgeHub/researchDetailView.css";

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
                BREADCRUMBS
            ========================================== */}

            <ResearchBreadcrumbs
                items={[
                    {
                        label: "Knowledge Hub",
                        to: "/knowledge-hub",
                    },
                    {
                        label: "Research Contributions",
                        to: "/research-contributions",
                    },
                    {
                        label: viewModel.title,
                    },
                ]}
            />

            {/* ==========================================
                RESEARCH READER
            ========================================== */}

            <section className="research-detail">

                <div className="container">

                    {/* HEADER */}

                    <ResearchHeader
                        research={viewModel}
                    />

                    {/* READER */}

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

                    {/* RELATED RESEARCH */}

                    <ResearchRelated
                        publications={viewModel.relatedPublications}
                    />

                </div>

            </section>

            {/* ==========================================
                KNOWLEDGE HUB JOURNEY
            ========================================== */}

            <PublicationsArchive />

            <HubSearch />

            <UniversalCTA page="hub" />

        </>

    );

}

export default ResearchDetailView;
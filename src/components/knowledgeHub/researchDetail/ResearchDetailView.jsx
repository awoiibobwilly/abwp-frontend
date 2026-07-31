import { useMemo } from "react";

import createResearchViewModel from "./viewModels/researchViewModel";

import ResearchReadingProgress from "./ResearchReadingProgress";
import ResearchBreadcrumbs from "./ResearchBreadcrumbs";
import ResearchHeader from "./ResearchHeader";
import ResearchSidebar from "./ResearchSidebar";
import ResearchContent from "./ResearchContent";
import ResearchRelated from "./ResearchRelated";

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
            <ResearchReadingProgress />

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

            <ResearchHeader
                research={viewModel}
            />

            <section className="research-detail">

                <div className="research-detail-container">

                    <aside className="research-detail-sidebar">

                        <ResearchSidebar
                            author={viewModel.author}
                            publication={viewModel.publicationInfo}
                            statistics={viewModel.statistics}
                            actions={viewModel.actions}
                        />

                    </aside>

                    <main className="research-detail-content">

                        <ResearchContent
                            research={viewModel}
                        />

                    </main>

                </div>

            </section>

            <ResearchRelated
                publications={viewModel.relatedPublications}
            />
        </>
    );

}

export default ResearchDetailView;
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import useApiResource from "../../hooks/useApiResource";

import {
    getResearchContributionBySlug,
} from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";

import {
    ResearchHeader,
    ResearchAbstract,
    ResearchMetadata,
    ResearchThemes,
    ResearchTags,
    ResearchResources,
    ResearchRelated,
} from "../components/knowledgeHub/research/reader/ResearchDetailView";

import {
    ResearchReaderLayout,
} from "../components/layout/ResearchReader";

import "../../styles/knowledgeHub/researchDetail.css";

function ResearchDetail() {

    

    const { slug } = useParams();

    console.log("Slug:", slug);

    const {
        data: research,
        loading,
        error,
    } = useApiResource(
        

        ({ signal }) =>

            getResearchContributionBySlug(
                slug,
                { signal }
            )

    );

    console.log(research);

    const resources = useMemo(() => {

        if (!research) {

            return [];

        }


        return [

            research.pdf && {

                id: "pdf",

                title: "Full Publication",

                description:
                    "Read or download the complete publication.",

                url: research.pdf,

                icon: "bi bi-file-earmark-pdf",

            },

            research.doi && {

                id: "doi",

                title: "Digital Object Identifier",

                description:
                    "View the official DOI record.",

                url: `https://doi.org/${research.doi}`,

                icon: "bi bi-link-45deg",

            },

            research.publication_url && {

                id: "publication",

                title: "Publisher Website",

                description:
                    "Visit the publication page.",

                url: research.publication_url,

                icon: "bi bi-globe",

            },

        ].filter(Boolean);

    }, [research]);

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    if (!research) {

        return (

            <EmptyState

                title="Research Not Found"

                message="The requested research contribution could not be found."

            />

        );

    }

    return (
        

            <article className="research-detail">

            <ResearchHeader
                research={research}
            />

            <ResearchReaderLayout

                right={
                    <>
                        <ResearchMetadata
                            publication={research.publication}
                            publicationDate={research.publication_date}
                            contributionType={research.contribution_type_display}
                            doi={research.doi}
                        />

                        <ResearchThemes
                            themes={research.themes}
                        />

                        <ResearchTags
                            tags={research.tags}
                        />

                        <ResearchResources
                            resources={resources}
                        />
                            </>
                        }

                    >
                        <ResearchAbstract
                            abstractText={research.abstract}
                        />
                    </ResearchReaderLayout>

                    <ResearchRelated
                        publications={research.related_publications}
                    />

                    </article>

    );

}

export default ResearchDetail;
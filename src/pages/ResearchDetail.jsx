import { useCallback } from "react";
import { useParams } from "react-router-dom";

import useApiResource from "../hooks/useApiResource";

import {
    getResearchContributionBySlug,
} from "../services/knowledgeHubService";

import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";

import ResearchDetailView from "../components/knowledgeHub/researchDetail/ResearchDetailView";

/* ==========================================
   KNOWLEDGE HUB EXPERIENCE
========================================== */

import PublicationsArchive from "../components/knowledgeHub/PublicationsArchive";
import HubSearch from "../components/knowledgeHub/HubSearch";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function ResearchDetail() {

    const { slug } = useParams();

    const request = useCallback(

        ({ signal }) =>

            getResearchContributionBySlug(

                slug,

                { signal }

            ),

        [slug]

    );

    const {

        data: research,

        loading,

        error,

        reload,

    } = useApiResource(request);

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return (

            <ErrorState

                message={error}

                onRetry={reload}

            />

        );

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

        <>

            {/* ==========================================
                RESEARCH READER
            ========================================== */}

            <ResearchDetailView

                research={research}

            />

            {/* ==========================================
                KNOWLEDGE HUB DISCOVERY
            ========================================== */}

            <PublicationsArchive />

            <HubSearch />

            {/* ==========================================
                ENGAGEMENT
            ========================================== */}

            <UniversalCTA page="hub" />

        </>

    );

}

export default ResearchDetail;
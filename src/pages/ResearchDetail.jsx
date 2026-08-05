import { useCallback } from "react";
import { useParams } from "react-router-dom";

import useApiResource from "../hooks/useApiResource";

import {
    getResearchContributionBySlug,
} from "../services/knowledgeHubService";

import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";


import ResearchDetailView from "../components/knowledgeHub/research/reader/ResearchDetailView";

/* ==========================================
   KNOWLEDGE HUB EXPERIENCE
========================================== */


import PublicationsArchive from "../components/knowledgeHub/hub/PublicationsArchive";

import HubSearch from "../components/knowledgeHub/hub/HubSearch";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";



import "../styles/knowledgeHub/researchDetailView.css";

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
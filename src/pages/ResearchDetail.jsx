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

        <ResearchDetailView

            research={research}

        />

    );

}

export default ResearchDetail;
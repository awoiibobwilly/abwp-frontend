import useApiResource from "../../hooks/useApiResource";
import useResearchExplorer from "../../hooks/useResearchExplorer";

import { getResearchContributions } from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";

import ResearchHero from "./ResearchHero";
import FeaturedResearch from "./FeaturedResearch";
import ResearchFilters from "./ResearchFilters";
import ResearchGrid from "./ResearchGrid";

import "../../styles/knowledgeHub/researchContributions.css";

function ResearchContributions() {

    /*
    ==========================================
    API
    ==========================================
    */

    const {

        data: contributions = [],

        loading,

        error,

    } = useApiResource(

        getResearchContributions,

        []

    );

    /*
    ==========================================
    RESEARCH EXPLORER
    ==========================================
    */

    const {

        featuredResearch,

        contributionTypes,

        filteredResearch,

        activeFilter,

        searchQuery,

        sortBy,

        actions,

    } = useResearchExplorer(contributions);

    /*
    ==========================================
    LOADING
    ==========================================
    */

    if (loading) {

        return <LoadingSpinner />;

    }

    /*
    ==========================================
    ERROR
    ==========================================
    */

    if (error) {

        return <ErrorState message={error} />;

    }

    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <section className="research-contributions section">

            <div className="container">

                <ResearchHero

                    contributions={contributions}

                    categories={contributionTypes.slice(1)}

                />

                <FeaturedResearch

                    research={featuredResearch}

                />

                <ResearchFilters

                    filters={contributionTypes}

                    activeFilter={activeFilter}

                    onFilterChange={actions.setActiveFilter}

                    searchQuery={searchQuery}

                    onSearchChange={actions.setSearchQuery}

                    sortBy={sortBy}

                    onSortChange={actions.setSortBy}

                />

                {

                    filteredResearch.length === 0 ? (

                        <EmptyState

                            title="No Research Found"

                            message="No research contributions match your search criteria."

                        />

                    ) : (

                        <ResearchGrid

                            contributions={filteredResearch}

                            onViewResearch={actions.openResearch}

                        />

                    )

                }

            </div>

        </section>

    );

}

export default ResearchContributions;
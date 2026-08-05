import { useCallback } from "react";

import useApiResource from "../../../hooks/useApiResource";

import {
    getResearchContributions,
} from "../../../services/knowledgeHubService";

import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorState from "../../common/ErrorState";
import EmptyState from "../../common/EmptyState";

import PublicationCard from "../PublicationCard";

import createArchiveViewModel
from "./viewModels/archiveViewModel";

import "../../../styles/knowledgeHub/publicationsArchive.css";

function PublicationsArchive() {

    /* ==========================================
       REQUEST
    ========================================== */

    const request = useCallback(

        ({ signal }) =>

            getResearchContributions({ signal }),

        []

    );

    const {

        data,

        loading,

        error,

        reload,

    } = useApiResource(request);

    /* ==========================================
       VIEW MODEL
    ========================================== */

    const archive = createArchiveViewModel(data);

    /* ==========================================
       STATES
    ========================================== */

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

    if (!archive.items.length) {

        return (

            <EmptyState

                title="No Publications"

                message="Research publications will appear here once they become available."

            />

        );

    }

    /* ==========================================
       VIEW
    ========================================== */

    return (

        <section className="publications-archive section">

            <div className="container">

                <header className="publications-header">

                    <span className="publications-badge">

                        Publications Archive

                    </span>

                    <h2 className="section-title">

                        Research and Scholarly Contributions

                    </h2>

                    <p className="section-subtitle">

                        Explore research publications, dissertations,
                        reports and scholarly work contributing to
                        evidence-based practice, innovation and
                        multidisciplinary knowledge.

                    </p>

                </header>

                {/* ==========================================
                    ARCHIVE SUMMARY
                ========================================== */}

                <div className="publications-summary">

                    <span>

                        {archive.meta.count} Publications

                    </span>

                </div>

                {/* ==========================================
                    PUBLICATION GRID
                ========================================== */}

                <div className="publications-grid">

                    {archive.items.map((publication) => (

                        <PublicationCard

                            key={publication.id}

                            publication={publication}

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default PublicationsArchive;
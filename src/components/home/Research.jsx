import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import ResearchCard from "./ResearchCard";
import ResearchSkeleton from "./ResearchSkeleton";

import useApiResource from "../../hooks/useApiResource";

import { getResearchPreview } from "../../services/researchService";

import "../../styles/home/research.css";

function Research() {

    // ======================================================
    // Fetch Research
    // ======================================================

    const {

        data: research,

        loading,

        error,

    } = useApiResource(

        getResearchPreview

    );

    // ======================================================
    // Component
    // ======================================================

    return (

        <section

            id="research"

            className="research section"

        >

            <div className="container">

                <SectionHeader

                    eyebrow="Research"

                    title="Research & Publications"

                    description="Exploring healthcare, technology, innovation and evidence-based practice through research, publications and professional contributions."

                />

                {

                    loading && (

                        <ResearchSkeleton />

                    )

                }

                {

                    !loading &&

                    error && (

                        <SectionMessage

                            type="error"

                            message={error}

                        />

                    )

                }

                {

                    !loading &&

                    !error &&

                    research.length === 0 && (

                        <SectionMessage

                            type="empty"

                            message="Research publications will appear here soon."

                        />

                    )

                }

                {

                    !loading &&

                    !error &&

                    research.length > 0 && (

                        <div className="research-grid">

                            {

                                research.map(

                                    (item) => (

                                        <ResearchCard

                                            key={item.id}

                                            research={item}

                                        />

                                    )

                                )

                            }

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Research;
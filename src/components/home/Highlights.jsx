import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import HighlightCounter from "./HighlightCounter";
import HighlightSkeleton from "./HighlightSkeleton";

import useApiResource from "../../hooks/useApiResource";

import { getHighlights } from "../../services/highlightService";

import { iconMap } from "../../utils/iconMapper";

import "../../styles/home/highlights.css";

function Highlights() {

    // ======================================================
    // Fetch Highlights
    // ======================================================

    const {

        data: highlights,

        loading,

        error,

    } = useApiResource(

        getHighlights

    );

    return (

        <section

            className="highlights section"

        >

            <div className="container">

                {/* ======================================
                    Section Header
                ======================================= */}

                <SectionHeader

                    eyebrow="Highlights"

                    title="Professional Highlights"

                    description="A multidisciplinary professional committed to technology, healthcare, research, leadership and measurable impact."

                />

                {/* ======================================
                    Loading
                ======================================= */}

                {

                    loading && (

                        <HighlightSkeleton />

                    )

                }

                {/* ======================================
                    Error
                ======================================= */}

                {

                    !loading &&

                    error && (

                        <SectionMessage

                            type="error"

                            message={error}

                        />

                    )

                }

                {/* ======================================
                    Empty
                ======================================= */}

                {

                    !loading &&

                    !error &&

                    highlights.length === 0 && (

                        <SectionMessage

                            type="empty"

                            message="Highlights will appear here soon."

                        />

                    )

                }

                {/* ======================================
                    Highlights Grid
                ======================================= */}

                {

                    !loading &&

                    !error &&

                    highlights.length > 0 && (

                        <div className="highlights-grid">

                            {

                                highlights.map((item) => {

                                    const Icon = iconMap[item.icon];

                                    return (

                                        <article

                                            key={item.id}

                                            className="highlight-card"

                                        >

                                            <div className="highlight-icon">

                                                {

                                                    Icon && <Icon />

                                                }

                                            </div>

                                            <h3>

                                                <HighlightCounter

                                                    value={item.value}

                                                    suffix={item.suffix}

                                                />

                                            </h3>

                                            <span>

                                                {item.title}

                                            </span>

                                        </article>

                                    );

                                })

                            }

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Highlights;
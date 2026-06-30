import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import ResearchCard from "./ResearchCard";
import ResearchSkeleton from "./ResearchSkeleton";

import { getResearchPreview } from "../../services/researchService";

import "../../styles/home/research.css";

function Research() {

    // ==================================================
    // State
    // ==================================================

    const [research, setResearch] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    // ==================================================
    // Fetch Research
    // ==================================================

    useEffect(() => {

        const controller = new AbortController();

        const fetchResearch = async () => {

            try {

                setLoading(true);

                setError("");

                const data = await getResearchPreview({

                    signal: controller.signal,

                });

                setResearch(data);

            }

            catch (err) {

                if (

                    err.name === "AbortError" ||

                    err.name === "CanceledError"

                ) {

                    return;

                }

                console.error(

                    "Research Error:",

                    err

                );

                setError(

                    err?.response?.data?.detail ||

                    err?.message ||

                    "Unable to load research."

                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchResearch();

        return () => {

            controller.abort();

        };

    }, []);

    // ==================================================
    // Loading
    // ==================================================

    if (loading) {

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

                    <ResearchSkeleton />

                </div>

            </section>

        );

    }

    // ==================================================
    // Error
    // ==================================================

    if (error) {

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

                    <SectionMessage

                        type="error"

                        message={error}

                    />

                </div>

            </section>

        );

    }

    // ==================================================
    // Empty
    // ==================================================

    if (research.length === 0) {

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

                    <SectionMessage

                        type="empty"

                        message="Research publications will appear here soon."

                    />

                </div>

            </section>

        );

    }

    // ==================================================
    // Success
    // ==================================================

    return (

        <section

            id="research"

            className="research section"

        >

            <div className="container">

                {/* ==========================================
                    Section Header
                =========================================== */}

                <motion.div

                    initial={{

                        opacity: 0,

                        y: 30,

                    }}

                    whileInView={{

                        opacity: 1,

                        y: 0,

                    }}

                    viewport={{

                        once: true,

                    }}

                    transition={{

                        duration: 0.6,

                    }}

                >

                    <SectionHeader

                        eyebrow="Research"

                        title="Research & Publications"

                        description="Exploring healthcare, technology, innovation and evidence-based practice through research, publications and professional contributions."

                    />

                </motion.div>

                {/* ==========================================
                    Research Grid
                =========================================== */}

                <motion.div

                    className="research-grid"

                    initial={{

                        opacity: 0,

                    }}

                    whileInView={{

                        opacity: 1,

                    }}

                    viewport={{

                        once: true,

                    }}

                    transition={{

                        staggerChildren: 0.12,

                    }}

                >

                    {

                        research.map((item) => (

                            <motion.div

                                key={item.id}

                                initial={{

                                    opacity: 0,

                                    y: 30,

                                }}

                                whileInView={{

                                    opacity: 1,

                                    y: 0,

                                }}

                                viewport={{

                                    once: true,

                                }}

                                transition={{

                                    duration: 0.45,

                                }}

                            >

                                <ResearchCard

                                    research={item}

                                />

                            </motion.div>

                        ))

                    }

                </motion.div>

            </div>

        </section>

    );

}

export default Research;
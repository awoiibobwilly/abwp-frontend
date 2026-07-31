import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ResearchTableOfContents({ items = [] }) {

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActiveSection(entry.target.id);

                    }

                });

            },

            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0,
            }

        );

        const observedSections = [];

        items.forEach(({ id }) => {

            const section = document.getElementById(id);

            if (section) {

                observer.observe(section);

                observedSections.push(section);

            }

        });

        return () => {

            observedSections.forEach((section) => {

                observer.unobserve(section);

            });

            observer.disconnect();

        };

    }, [items]);

    const handleClick = (id) => {

        const section = document.getElementById(id);

        if (!section) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        section.scrollIntoView({

            behavior: prefersReducedMotion
                ? "auto"
                : "smooth",

            block: "start",

        });

    };

    if (!items.length) return null;

    return (

        <aside
            className="research-toc"
            aria-labelledby="research-toc-title"
        >

            <h3 id="research-toc-title">

                Contents

            </h3>

            <nav aria-labelledby="research-toc-title">

                <ul>

                    {items.map((item) => {

                        const isActive = activeSection === item.id;

                        return (

                            <li key={item.id}>

                                <button

                                    type="button"

                                    onClick={() => handleClick(item.id)}

                                    className={isActive ? "active" : ""}

                                    aria-current={
                                        isActive
                                            ? "location"
                                            : undefined
                                    }

                                >

                                    {item.label}

                                </button>

                            </li>

                        );

                    })}

                </ul>

            </nav>

        </aside>

    );

}

ResearchTableOfContents.propTypes = {

    items: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            label: PropTypes.string.isRequired,

        })

    ),

};

ResearchTableOfContents.defaultProps = {

    items: [],

};

export default ResearchTableOfContents;
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../../styles/common/backToTop.css";

function BackToTopButton({

    threshold = 400,

    className = "",

}) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setIsVisible(window.scrollY > threshold);

        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        // Check initial position
        handleScroll();

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, [threshold]);

    const handleBackToTop = () => {

        const prefersReducedMotion = window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        ).matches;

        window.scrollTo({

            top: 0,

            behavior: prefersReducedMotion
                ? "auto"
                : "smooth",

        });

    };

    return (

        <button

            type="button"

            className={`
                back-to-top
                ${isVisible ? "visible" : ""}
                ${className}
            `.trim()}

            onClick={handleBackToTop}

            aria-label="Back to top"

            title="Back to top"

        >

            <i

                className="bi bi-arrow-up"

                aria-hidden="true"

            />

        </button>

    );

}

BackToTopButton.propTypes = {

    threshold: PropTypes.number,

    className: PropTypes.string,

};

export default BackToTopButton;
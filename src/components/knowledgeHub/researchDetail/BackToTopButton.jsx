import { useEffect, useState } from "react";

function BackToTopButton() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setVisible(window.scrollY > 400);

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth",

        });

    };

    if (!visible) return null;

    return (

        <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
        >

            <i className="bi bi-arrow-up"></i>

        </button>

    );

}

export default BackToTopButton;
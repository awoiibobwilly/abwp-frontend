import { useEffect } from "react";

import ResearchDetail from "./ResearchDetail";

import "../../styles/knowledgeHub/researchModal.css";

function ResearchModal({

    research,

    isOpen,

    onClose,

}) {

    /*
    ==========================================
    ESC KEY SUPPORT
    ==========================================
    */

    useEffect(() => {

        if (!isOpen) return;

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {

                onClose();

            }

        };

        document.addEventListener(

            "keydown",

            handleKeyDown

        );

        return () =>

            document.removeEventListener(

                "keydown",

                handleKeyDown

            );

    }, [

        isOpen,

        onClose,

    ]);

    /*
    ==========================================
    BODY SCROLL LOCK
    ==========================================
    */

    useEffect(() => {

        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = "";

        };

    }, [isOpen]);

    /*
    ==========================================
    HIDDEN
    ==========================================
    */

    if (!isOpen || !research) {

        return null;

    }

    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <div

            className="research-modal-overlay"

            onClick={onClose}

        >

            <div

                className="research-modal"

                onClick={(event) =>

                    event.stopPropagation()

                }

            >

                <button

                    type="button"

                    className="research-modal-close"

                    onClick={onClose}

                    aria-label="Close research details"

                >

                    <i className="bi bi-x-lg"></i>

                </button>

                <ResearchDetail

                    research={research}

                />

            </div>

        </div>

    );

}

export default ResearchModal;
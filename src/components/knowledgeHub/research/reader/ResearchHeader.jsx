import PropTypes from "prop-types";

import ReaderNavigation from "./ReaderNavigation";
import ResearchCover from "./ResearchCover";
import ResearchIntro from "./ResearchIntro";

function ResearchHeader({ research }) {

    return (

        <header
            className="research-detail-header"
            aria-labelledby="research-title"
        >

            {/* ==========================================
                READER NAVIGATION
            ========================================== */}

            <ReaderNavigation
                to="/knowledge-hub/research-contributions"
                label="Research Contributions"
            />

            {/* ==========================================
                PUBLICATION HERO
            ========================================== */}

            <div className="research-detail-hero">

                <ResearchCover
                    research={research}
                />

                <ResearchIntro
                    research={research}
                />

            </div>

        </header>

    );

}

ResearchHeader.propTypes = {

    research: PropTypes.object.isRequired,

};

export default ResearchHeader;
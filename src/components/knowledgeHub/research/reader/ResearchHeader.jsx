import PropTypes from "prop-types";

import ResearchCover from "./ResearchCover";
import ResearchIntro from "./ResearchIntro";

function ResearchHeader({ research }) {

    return (

        <header className="research-detail-header">

            <ResearchCover
                research={research}
            />

            <ResearchIntro
                research={research}
            />

        </header>

    );

}

ResearchHeader.propTypes = {

    research: PropTypes.object.isRequired,

};

export default ResearchHeader;
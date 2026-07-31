import PropTypes from "prop-types";

import ResearchAbstract from "./sections/ResearchAbstract";
import ResearchMetadata from "./sections/ResearchMetadata";
import ResearchThemes from "./sections/ResearchThemes";
import ResearchTags from "./sections/ResearchTags";
import ResearchResources from "./sections/ResearchResources";

function ResearchContent({

    research,

}) {

    return (

        <>

            <ResearchAbstract

                abstractText={research.abstract}

            />

            <ResearchMetadata
                metadata={research.metadata}
            />

            <ResearchThemes

                themes={research.themes}

            />

            <ResearchTags

                tags={research.tags}

            />

            <ResearchResources

                resources={research.resources}

            />

        </>

    );

}

ResearchContent.propTypes = {

    research: PropTypes.object.isRequired,

};

export default ResearchContent;
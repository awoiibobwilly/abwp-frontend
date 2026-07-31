import PropTypes from "prop-types";

import ResearchReaderAside from "./ResearchReaderAside";
import ResearchReaderMain from "./ResearchReaderMain";

function ResearchReaderLayout({

    left,

    children,

    right,

}) {

    return (

        <section
            className="research-reader-layout"
            aria-label="Research Reader Layout"
        >

            <ResearchReaderAside position="left">

                {left}

            </ResearchReaderAside>

            <ResearchReaderMain>

                {children}

            </ResearchReaderMain>

            <ResearchReaderAside position="right">

                {right}

            </ResearchReaderAside>

        </section>

    );

}

ResearchReaderLayout.propTypes = {

    left: PropTypes.node,

    children: PropTypes.node.isRequired,

    right: PropTypes.node,

};

ResearchReaderLayout.defaultProps = {

    left: null,

    right: null,

};

export default ResearchReaderLayout;
import PropTypes from "prop-types";

function ResearchReaderAside({

    position = "left",

    children,

}) {

    return (

        <aside
            className={`reader-${position}`}
        >

            {children}

        </aside>

    );

}

ResearchReaderAside.propTypes = {

    position: PropTypes.oneOf([
        "left",
        "right",
    ]),

    children: PropTypes.node,

};

ResearchReaderAside.defaultProps = {

    position: "left",

    children: null,

};

export default ResearchReaderAside;
import PropTypes from "prop-types";

function InfoSidebar({

    sticky = true,

    children,

}) {

    return (

        <aside
            className={
                sticky
                    ? "info-sidebar sticky"
                    : "info-sidebar"
            }
        >

            {children}

        </aside>

    );

}

InfoSidebar.propTypes = {

    sticky: PropTypes.bool,

    children: PropTypes.node.isRequired,

};

InfoSidebar.defaultProps = {

    sticky: true,

};

export default InfoSidebar;
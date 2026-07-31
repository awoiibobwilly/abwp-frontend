import PropTypes from "prop-types";

function SidebarCard({

    title,

    icon,

    children,

    className = "",

}) {

    return (

        <section
            className={`sidebar-card ${className}`.trim()}
        >

            {(title || icon) && (

                <header className="sidebar-card-header">

                    {icon && (

                        <i
                            className={icon}
                            aria-hidden="true"
                        ></i>

                    )}

                    {title && (

                        <h3>

                            {title}

                        </h3>

                    )}

                </header>

            )}

            <div className="sidebar-card-body">

                {children}

            </div>

        </section>

    );

}

SidebarCard.propTypes = {

    title: PropTypes.string,

    icon: PropTypes.string,

    children: PropTypes.node.isRequired,

    className: PropTypes.string,

};

SidebarCard.defaultProps = {

    title: "",

    icon: "",

    className: "",

};

export default SidebarCard;
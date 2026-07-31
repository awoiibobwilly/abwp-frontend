import PropTypes from "prop-types";

function InfoCard({

    title,

    icon,

    actions,

    className = "",

    children,

}) {

    return (

        <section
            className={`info-card ${className}`.trim()}
        >

            {(title || icon || actions) && (

                <header className="info-card-header">

                    <div className="info-card-title">

                        {icon && (

                            <i
                                className={icon}
                                aria-hidden="true"
                            />

                        )}

                        {title && (

                            <h3>

                                {title}

                            </h3>

                        )}

                    </div>

                    {actions && (

                        <div className="info-card-header-actions">

                            {actions}

                        </div>

                    )}

                </header>

            )}

            <div className="info-card-body">

                {children}

            </div>

        </section>

    );

}

InfoCard.propTypes = {

    title: PropTypes.string,

    icon: PropTypes.string,

    actions: PropTypes.node,

    className: PropTypes.string,

    children: PropTypes.node.isRequired,

};

InfoCard.defaultProps = {

    title: "",

    icon: "",

    actions: null,

    className: "",

};

export default InfoCard;
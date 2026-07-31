import PropTypes from "prop-types";

function InfoCardItem({

    label,

    value,

    icon,

    href,

    badge,

    children,

    className = "",

}) {

    if (!value && !children) return null;

    return (

        <div
            className={`info-card-item ${className}`.trim()}
        >

            <div className="info-card-item-label">

                {icon && (

                    <i
                        className={icon}
                        aria-hidden="true"
                    />

                )}

                <span>

                    {label}

                </span>

            </div>

            <div className="info-card-item-value">

                {children ? (

                    children

                ) : href ? (

                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        {value}

                    </a>

                ) : (

                    <span>

                        {value}

                    </span>

                )}

                {badge && (

                    <span className="info-card-badge">

                        {badge}

                    </span>

                )}

            </div>

        </div>

    );

}

InfoCardItem.propTypes = {

    label: PropTypes.string.isRequired,

    value: PropTypes.oneOfType([

        PropTypes.string,

        PropTypes.number,

    ]),

    icon: PropTypes.string,

    href: PropTypes.string,

    badge: PropTypes.string,

    children: PropTypes.node,

    className: PropTypes.string,

};

InfoCardItem.defaultProps = {

    value: "",

    icon: "",

    href: "",

    badge: "",

    children: null,

    className: "",

};

export default InfoCardItem;
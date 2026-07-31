import PropTypes from "prop-types";

function InfoAction({

    icon,

    label,

    href,

    onClick,

    external = false,

}) {

    const className = "info-action";

    if (href) {

        return (

            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={
                    external
                        ? "noopener noreferrer"
                        : undefined
                }
                className={className}
            >

                <i className={icon}></i>

                <span>

                    {label}

                </span>

            </a>

        );

    }

    return (

        <button
            type="button"
            className={className}
            onClick={onClick}
        >

            <i className={icon}></i>

            <span>

                {label}

            </span>

        </button>

    );

}

InfoAction.propTypes = {

    icon: PropTypes.string.isRequired,

    label: PropTypes.string.isRequired,

    href: PropTypes.string,

    onClick: PropTypes.func,

    external: PropTypes.bool,

};

InfoAction.defaultProps = {

    href: "",

    onClick: undefined,

    external: false,

};

export default InfoAction;
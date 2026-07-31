import PropTypes from "prop-types";

function SidebarActions({ actions = [] }) {

    if (!actions.length) return null;

    return (

        <section className="sidebar-card">

            <h3>

                Quick Actions

            </h3>

            <div className="sidebar-actions">

                {actions.map((action) => {

                    if (action.href) {

                        return (

                            <a
                                key={action.id}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sidebar-action"
                            >

                                <i className={action.icon}></i>

                                <span>

                                    {action.label}

                                </span>

                            </a>

                        );

                    }

                    return (

                        <button
                            key={action.id}
                            type="button"
                            className="sidebar-action"
                            onClick={action.onClick}
                        >

                            <i className={action.icon}></i>

                            <span>

                                {action.label}

                            </span>

                        </button>

                    );

                })}

            </div>

        </section>

    );

}

SidebarActions.propTypes = {

    actions: PropTypes.array,

};

export default SidebarActions;
import PropTypes from "prop-types";

function SidebarRenderer({ sidebar }) {

    if (!sidebar?.length) {

        return null;

    }

    return (

        <aside className="research-sidebar">

            {

                sidebar.map((card) => (

                    <section
                        key={card.id}
                        className="sidebar-card"
                    >

                        <h3 className="sidebar-card-title">

                            {card.title}

                        </h3>

                        <div className="sidebar-card-body">

                            {

                                card.items.map((item) => (

                                    <div
                                        key={item.id}
                                        className="sidebar-item"
                                    >

                                        {

                                            "value" in item ? (

                                                <>

                                                    <span className="sidebar-item-label">

                                                        {item.label}

                                                    </span>

                                                    <div className="sidebar-item-value">

                                                        {

                                                            item.href ? (

                                                                <a
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >

                                                                    {item.value}

                                                                </a>

                                                            ) : (

                                                                item.value

                                                            )

                                                        }

                                                    </div>

                                                </>

                                            ) : (

                                                <a
                                                    href={item.href}
                                                    className="sidebar-action"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >

                                                    {item.icon && (

                                                        <span className="sidebar-action-icon">

                                                            {item.icon}

                                                        </span>

                                                    )}

                                                    <span>

                                                        {item.label}

                                                    </span>

                                                </a>

                                            )

                                        }

                                    </div>

                                ))

                            }

                        </div>

                    </section>

                ))

            }

        </aside>

    );

}

SidebarRenderer.propTypes = {

    sidebar: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            title: PropTypes.string.isRequired,

            items: PropTypes.array.isRequired,

        })

    ),

};

SidebarRenderer.defaultProps = {

    sidebar: [],

};

export default SidebarRenderer;
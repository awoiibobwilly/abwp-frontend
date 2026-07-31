import PropTypes from "prop-types";

function SidebarSummary({ publication }) {

    if (!publication) return null;

    const items = [

        {

            label: "Publication",

            value: publication.type,

        },

        {

            label: "Institution",

            value: publication.institution,

        },

        {

            label: "Published",

            value: publication.date,

        },

        {

            label: "Reading Time",

            value: publication.readingTime,

        },

    ].filter(item => item.value);

    return (

        <section className="sidebar-card">

            <h3>

                Publication

            </h3>

            <div className="sidebar-summary">

                {items.map((item) => (

                    <div
                        key={item.label}
                        className="sidebar-summary-item"
                    >

                        <span className="sidebar-label">

                            {item.label}

                        </span>

                        <span className="sidebar-value">

                            {item.value}

                        </span>

                    </div>

                ))}

            </div>

        </section>

    );

}

SidebarSummary.propTypes = {

    publication: PropTypes.object,

};

export default SidebarSummary;
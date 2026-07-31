import PropTypes from "prop-types";

function SidebarStats({ stats = [] }) {

    if (!stats.length) return null;

    return (

        <section className="sidebar-card">

            <h3>

                Statistics

            </h3>

            <div className="sidebar-stats">

                {stats.map((stat) => (

                    <div
                        key={stat.label}
                        className="sidebar-stat"
                    >

                        <strong>

                            {stat.value}

                        </strong>

                        <span>

                            {stat.label}

                        </span>

                    </div>

                ))}

            </div>

        </section>

    );

}

SidebarStats.propTypes = {

    stats: PropTypes.arrayOf(

        PropTypes.shape({

            label: PropTypes.string.isRequired,

            value: PropTypes.oneOfType([

                PropTypes.string,

                PropTypes.number,

            ]).isRequired,

        })

    ),

};

export default SidebarStats;
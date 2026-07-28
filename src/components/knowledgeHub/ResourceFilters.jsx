import "../../styles/knowledgeHub/resourceFilters.css";

function ResourceFilters({

    filters = [],

    activeFilter = "All",

    onFilterChange = () => {},

}) {

    return (

        <section className="resource-filters">

            <div className="container">

                <div className="resource-filters-wrapper">

                    {filters.map((filter) => (

                        <button

                            key={filter.value}

                            type="button"

                            className={`resource-filter-btn ${
                                activeFilter === filter.value
                                    ? "active"
                                    : ""
                            }`}

                            aria-pressed={activeFilter === filter.value}

                            onClick={() =>
                                onFilterChange(filter.value)
                            }

                        >

                            {filter.label}

                        </button>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default ResourceFilters;
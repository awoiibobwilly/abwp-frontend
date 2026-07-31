import "../../styles/knowledgeHub/researchFilters.css";

function ResearchFilters({

    filters,

    activeFilter,

    onFilterChange,

    searchQuery,

    onSearchChange,

    sortBy,

    onSortChange,

}) {

    return (

        <section className="research-filters">

            <div className="research-filter-header">

                <h3>

                    Browse Research

                </h3>

                <p>

                    Explore publications by category, keyword or publication date.

                </p>

            </div>

            <div className="research-filter-pills">

                {

                    filters.map(filter => (

                        <button

                            key={filter.value}

                            type="button"

                            className={

                                activeFilter === filter.value

                                    ? "filter-pill active"

                                    : "filter-pill"

                            }

                            onClick={() =>

                                onFilterChange(filter.value)

                            }

                        >

                            {filter.label}

                        </button>

                    ))

                }

            </div>

            <div className="research-filter-tools">

                <div className="research-search">

                    <i className="bi bi-search"></i>

                    <input

                        type="search"

                        placeholder="Search research..."

                        value={searchQuery}

                        onChange={event =>

                            onSearchChange(event.target.value)

                        }

                    />

                </div>

                <select

                    value={sortBy}

                    onChange={event =>

                        onSortChange(event.target.value)

                    }

                >

                    <option value="latest">

                        Latest

                    </option>

                    <option value="oldest">

                        Oldest

                    </option>

                    <option value="title">

                        Title

                    </option>

                </select>

            </div>

        </section>

    );

}

export default ResearchFilters;
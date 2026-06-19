import {
  resourceFiltersData,
} from "../../data/knowledgeHub/resourceFiltersData";

import "../../styles/knowledgeHub/resourceFilters.css";

function ResourceFilters() {

  return (

    <section className="resource-filters">

      <div className="container">

        <div className="resource-filters-wrapper">

          {resourceFiltersData.map(

            (filter, index) => (

              <button
                key={index}
                className={`resource-filter-btn ${
                  index === 0 ? "active" : ""
                }`}
              >

                {filter}

              </button>

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default ResourceFilters;
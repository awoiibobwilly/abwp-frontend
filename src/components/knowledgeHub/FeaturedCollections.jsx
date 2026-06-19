import CollectionCard from "./CollectionCard";

import {
  collectionsData,
} from "../../data/knowledgeHub/collectionsData";

import "../../styles/knowledgeHub/featuredCollections.css";

function FeaturedCollections() {

  return (

    <section
      className="featured-collections section"
      id="collections"
    >

      <div className="container">

        <div className="collections-header">

          <span className="collections-badge">

            Featured Collections

          </span>


          <h2 className="section-title">

            Explore Knowledge by Theme

          </h2>


          <p className="section-subtitle">

            Curated collections designed to
            support lifelong learning, research,
            innovation, and professional growth.

          </p>

        </div>


        <div className="collections-grid">

          {collectionsData.map(

            (collection, index) => (

              <CollectionCard
                key={index}
                collection={collection}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default FeaturedCollections;
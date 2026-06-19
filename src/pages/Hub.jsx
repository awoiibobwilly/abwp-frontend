import HubHero from "../components/knowledgeHub/HubHero";
import FeaturedCollections from "../components/knowledgeHub/FeaturedCollections";
import ResourceFilters from
"../components/knowledgeHub/ResourceFilters";
import BookLibrary from
"../components/knowledgeHub/BookLibrary";

function Hub() {

  return (
    <>
      <HubHero />

      <FeaturedCollections />

      <ResourceFilters />

      <BookLibrary />


    </>
  );
}

export default Hub;
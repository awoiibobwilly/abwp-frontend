import HubHero from "../components/knowledgeHub/HubHero";
import FeaturedCollections from "../components/knowledgeHub/FeaturedCollections";
import ResourceFilters from
"../components/knowledgeHub/ResourceFilters";
import BookLibrary from
"../components/knowledgeHub/BookLibrary";
import VideoLibrary from
"../components/knowledgeHub/VideoLibrary";

function Hub() {

  return (
    <>
      <HubHero />

      <FeaturedCollections />

      <ResourceFilters />

      <BookLibrary />

      <VideoLibrary />


    </>
  );
}

export default Hub;
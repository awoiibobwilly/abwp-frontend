import HubHero from "../components/knowledgeHub/HubHero";
import FeaturedCollections from "../components/knowledgeHub/FeaturedCollections";
import ResourceFilters from
"../components/knowledgeHub/ResourceFilters";
import BookLibrary from
"../components/knowledgeHub/BookLibrary";
import VideoLibrary from
"../components/knowledgeHub/VideoLibrary";
import ResourceDirectory from
"../components/knowledgeHub/ResourceDirectory";
import ToolsTemplates from
"../components/knowledgeHub/ToolsTemplates";
import PublicationsArchive from
"../components/knowledgeHub/PublicationsArchive";
import HubSearch from
"../components/knowledgeHub/HubSearch";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Hub() {

  return (
    <>
      <HubHero />

      <FeaturedCollections />

      <ResourceFilters />

      <BookLibrary />

      <VideoLibrary />

      <ResourceDirectory />

      <ToolsTemplates />

      <PublicationsArchive />

      <HubSearch />

      <UniversalCTA

            page="hub"

        />


    </>
  );
}

export default Hub;
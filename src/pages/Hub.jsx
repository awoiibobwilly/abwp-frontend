import HubHero from "../components/knowledgeHub/hub/HubHero";
import FeaturedThemes from "../components/knowledgeHub/hub/KnowledgeThemes";
import BookLibrary from "../components/knowledgeHub/hub/KnowledgeLibrary";
import VideoLibrary from "../components/knowledgeHub/hub/VideoLibrary";
import ResourceDirectory from "../components/knowledgeHub/hub/PracticalResources";
import ToolsTemplates from "../components/knowledgeHub/ToolsTemplates";
import PublicationsArchive from "../components/knowledgeHub/hub/PublicationsArchive";
import HubSearch from "../components/knowledgeHub/hub/HubSearch";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Hub() {

  return (
    <>
      <HubHero />

      <FeaturedThemes />

      <BookLibrary />

      <VideoLibrary />

      <ResourceDirectory />

      <ToolsTemplates />

      <PublicationsArchive />

      <HubSearch />

      <UniversalCTA page="hub" />
    </>
  );

}

export default Hub;
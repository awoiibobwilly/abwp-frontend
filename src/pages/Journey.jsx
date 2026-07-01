import JourneyHero from "../components/journey/JourneyHero";
import JourneyTimeline from "../components/journey/JourneyTimeline";
import FutureVision from "../components/journey/FutureVision";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Journey() {
  return (
    <>
      <JourneyHero />

      <JourneyTimeline />

      <FutureVision />

      <UniversalCTA

          page="journey"

      />

    </>
  );
}

export default Journey;
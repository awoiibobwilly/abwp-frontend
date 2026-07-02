import SectionHeader from "../common/SectionHeader";
import whoIAmData from "../../data/about/whoIAmData";

import WhoIAmCard from "./WhoIAmCard";

import "../../styles/about/who-i-am.css";

function WhoIAm() {
  return (
    <section
      className="who-i-am section"
      id={whoIAmData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={whoIAmData.eyebrow}
          title={whoIAmData.title}
          description={whoIAmData.intro}
        />

        {/* ======================================
            IDENTITY CARDS
        ======================================= */}
        <div className="who-i-am-grid">
          {whoIAmData.cards.map((card) => (
            <WhoIAmCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoIAm;
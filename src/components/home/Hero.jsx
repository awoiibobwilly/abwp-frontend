import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import TrustStrip from "./TrustStrip";
import TechnologyRibbon from "./TechnologyRibbon";

import "../../styles/home/hero.css";

function Hero() {
  return (
    <section className="hero section">

      <div className="container">

        {/* HERO TOP */}
        <div className="hero-top">

          <div className="hero-left">
            <HeroContent />
          </div>

          <div className="hero-right">
            <HeroImage />
          </div>

        </div>

         {/* HERO STRIP */}
         <div className="hero-strip">
         <TrustStrip />
        </div>

        {/* HERO BOTTOM */}
        <div className="hero-bottom">
          <HeroStats />
        </div>

               {/* ==========================================
            TECHNOLOGY RIBBON
        ========================================== */}

              <div className="hero-technology">

              <TechnologyRibbon />

</div>

      </div>

    </section>
  );
}

export default Hero;
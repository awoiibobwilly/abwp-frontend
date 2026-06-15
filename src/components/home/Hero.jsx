import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

import "../../styles/home/hero.css";

function Hero() {
  return (
    <section className="hero section">

      <div className="container">

        <div className="hero-wrapper">

          <div className="hero-left">

            <HeroContent />

            <HeroStats />

          </div>

          <div className="hero-right">

            <HeroImage />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
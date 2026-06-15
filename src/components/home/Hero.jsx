import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

import "../../styles/home/hero.css";

function Hero() {
  return (
    <section className="hero section">
      <div className="container">

        <div className="hero-wrapper">

          {/* Right Side */}
          <div className="hero-right">
            <HeroContent />
            <HeroStats />
          </div>

          {/* Left Side */}
          <div className="hero-left">
            <HeroImage />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
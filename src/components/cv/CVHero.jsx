import CVHeroContent from "./CVHeroContent";
import CVHeroImage from "./CVHeroImage";

import "../../styles/cv/cvHero.css";

function CVHero() {

  return (

    <section className="cv-hero section">

      <div className="container">

        <div className="cv-hero-wrapper">

          <div className="cv-hero-left">

            <CVHeroContent />

          </div>


          <div className="cv-hero-right">

            <CVHeroImage />

          </div>

        </div>

      </div>

    </section>

  );

}

export default CVHero;
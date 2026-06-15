import "../../styles/home/hero-image.css";

function HeroImage() {
  return (
    <div className="hero-image">

      <div className="hero-image-circle">

        <img
          src="/images/profile.jpg"
          alt="Awoii Bob Willy"
        />

      </div>

      <div className="floating-badge badge-1">
        Healthcare Management
      </div>

      <div className="floating-badge badge-2">
        Data Science
      </div>

      <div className="floating-badge badge-3">
        Software Engineering
      </div>

      <div className="floating-badge badge-4">
        Research & Leadership
      </div>

    </div>
  );
}

export default HeroImage;
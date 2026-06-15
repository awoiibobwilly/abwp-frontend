import "../../styles/home/hero-image.css";

function HeroImage() {
  return (
    <div className="hero-image">

      {/* Gradient Glow */}
      <div className="hero-glow"></div>

      {/* Profile Image */}
      <div className="hero-image-circle">

        <img
          src="/images/profile.png"
          alt="Awoii Bob Willy"
        />

      </div>

      {/* Floating Badges */}

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
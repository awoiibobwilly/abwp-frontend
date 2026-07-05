function AboutHeroImage({ image, imageAlt }) {
  if (!image) return null;

  return (
    <div className="about-hero-image-wrap">
      <div className="about-hero-image-card">
        <img
          src={about.images}
          alt={imageAlt || "Awoii Bob Willy portrait"}
          className="about-hero-image"
        />
      </div>
    </div>
  );
}

export default AboutHeroImage;
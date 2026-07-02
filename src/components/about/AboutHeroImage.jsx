function AboutHeroImage({ image }) {
  return (
    <div className="about-hero-image-wrap">
      <div className="about-hero-image-card">
        <img
          src={image.src}
          alt={image.alt}
          className="about-hero-image"
        />
      </div>
    </div>
  );
}

export default AboutHeroImage;
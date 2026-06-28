import "../../styles/common/section-header.css";

function SectionHeader({

  eyebrow,

  title,

  description,

  centered = true,

}) {

  return (

    <header
      className={`section-header ${centered ? "centered" : ""}`}
    >

      {

        eyebrow && (

          <span className="section-eyebrow">

            {eyebrow}

          </span>

        )

      }

      <h2 className="section-title">

        {title}

      </h2>

      {

        description && (

          <p className="section-description">

            {description}

          </p>

        )

      }

    </header>

  );

}

export default SectionHeader;
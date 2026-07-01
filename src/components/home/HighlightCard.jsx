function HighlightCard({

  number,

  suffix,

  title,

}) {

  return (

    <article className="card card-interactive highlight-card">

      <div className="card-content highlight-content">

        <h3 className="highlight-number">

          {number}

          {suffix}

        </h3>

        <p className="highlight-title">

          {title}

        </p>

      </div>

    </article>

  );

}

export default HighlightCard;
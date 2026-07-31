import "../../styles/knowledgeHub/featuredResearch.css";

function FeaturedResearch({ research }) {

    if (!research) return null;

    const {

        title,

        summary,

        publication,

        publication_date,

        contribution_type_display,

        cover_image,

        themes = [],

        tags = [],

        document,

        external_url,

        doi,

    } = research;

    const year = publication_date
        ? new Date(publication_date).getFullYear()
        : "Current";

    return (

        <section className="featured-research">

            <div className="featured-research-image">

                {

                    cover_image && (

                        <img

                            src={cover_image}

                            alt={title}

                        />

                    )

                }

            </div>

            <div className="featured-research-content">

                <span className="featured-label">

                    <i className="bi bi-stars"></i>

                    Featured Research

                </span>

                <div className="featured-meta">

                    <span className="featured-type">

                        {contribution_type_display}

                    </span>

                    <span className="featured-year">

                        {year}

                    </span>

                </div>

                <h2>

                    {title}

                </h2>

                <p>

                    {summary}

                </p>

                {

                    publication && (

                        <div className="featured-publication">

                            <i className="bi bi-building"></i>

                            {publication}

                        </div>

                    )

                }

                <div className="featured-themes">

                    {

                        themes.map(theme => (

                            <span
                                key={theme.id}
                                className="theme-chip"
                            >

                                {theme.name}

                            </span>

                        ))

                    }

                </div>

                <div className="featured-tags">

                    {

                        tags.map(tag => (

                            <span
                                key={tag.id}
                                className="tag-chip"
                            >

                                #{tag.name}

                            </span>

                        ))

                    }

                </div>

                <div className="featured-actions">

                    {

                        document && (

                            <a
                                href={document}
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-btn"
                            >

                                PDF

                            </a>

                        )

                    }

                    {

                        doi && (

                            <a
                                href={`https://doi.org/${doi}`}
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-btn"
                            >

                                DOI

                            </a>

                        )

                    }

                    {

                        external_url && (

                            <a
                                href={external_url}
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-btn"
                            >

                                Source

                            </a>

                        )

                    }

                    <button
                        className="primary-btn"
                    >

                        View Research

                        <i className="bi bi-arrow-right"></i>

                    </button>

                </div>

            </div>

        </section>

    );

}

export default FeaturedResearch;
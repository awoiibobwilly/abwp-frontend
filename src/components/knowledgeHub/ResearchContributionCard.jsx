import "../../styles/knowledgeHub/researchContributionCard.css";

function ResearchContributionCard({

    contribution,

    onViewResearch,

}) {

    const {

        title,

        summary,

        publication,

        publication_date,

        contribution_type,

        contribution_type_display,

        cover_image,

        document,

        external_url,

        doi,

        themes = [],

        tags = [],

    } = contribution;

    const publicationYear = publication_date
        ? new Date(publication_date).getFullYear()
        : "Ongoing";

    return (

        <article className="research-card">

            {

                cover_image && (

                    <div className="research-card-image">

                        <img
                            src={cover_image}
                            alt={title}
                            loading="lazy"
                        />

                    </div>

                )

            }

            <div className="research-card-body">

                <div className="research-meta">

                    <span
                        className={`research-type research-type-${contribution_type}`}
                    >

                        {contribution_type_display}

                    </span>

                    <span className="research-year">

                        {publicationYear}

                    </span>

                </div>

                <h3 className="research-title">

                    {title}

                </h3>

                <p className="research-summary">

                    {summary}

                </p>

                {

                    publication && (

                        <div className="research-publication">

                            <i className="bi bi-building"></i>

                            <span>

                                {publication}

                            </span>

                        </div>

                    )

                }

                {

                    themes.length > 0 && (

                        <div className="research-themes">

                            {

                                themes.map((theme) => (

                                    <span
                                        key={theme.id}
                                        className="theme-chip"
                                    >

                                        <i className="bi bi-grid-fill"></i>

                                        {theme.name}

                                    </span>

                                ))

                            }

                        </div>

                    )

                }

                {

                    tags.length > 0 && (

                        <div className="research-tags">

                            {

                                tags.map((tag) => (

                                    <span
                                        key={tag.id}
                                        className="tag-chip"
                                    >

                                        #{tag.name}

                                    </span>

                                ))

                            }

                        </div>

                    )

                }

            </div>

            <footer className="research-actions">

                {

                    document && (

                        <a
                            href={document}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="research-action secondary"
                        >

                            <i className="bi bi-file-earmark-pdf"></i>

                            <span>

                                PDF

                            </span>

                        </a>

                    )

                }

                {

                    external_url && (

                        <a
                            href={external_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="research-action secondary"
                        >

                            <i className="bi bi-box-arrow-up-right"></i>

                            <span>

                                Source

                            </span>

                        </a>

                    )

                }

                {

                    doi && (

                        <a
                            href={`https://doi.org/${doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="research-action secondary"
                        >

                            <i className="bi bi-link-45deg"></i>

                            <span>

                                DOI

                            </span>

                        </a>

                    )

                }

                <button

                    type="button"

                    className="research-primary-btn"

                    onClick={() => {

                        console.log("Research clicked:", contribution);

                        onViewResearch(contribution);

                    }}

                >

                    View Research

                    <i className="bi bi-arrow-right"></i>

                </button>

            </footer>

        </article>

    );

}

export default ResearchContributionCard;
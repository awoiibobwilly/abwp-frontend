import "../../styles/knowledgeHub/researchHero.css";

function ResearchHero({ contributions = [], categories = [] }) {

    return (

        <header className="research-hero">

            <div className="research-hero-content">

                <span className="research-hero-badge">

                    <i className="bi bi-journal-richtext"></i>

                    Research Contributions

                </span>

                <h1 className="research-hero-title">

                    Advancing Knowledge Through
                    <span> Research & Evidence</span>

                </h1>

                <p className="research-hero-description">

                    A multidisciplinary collection of original research,
                    technical reports, dissertations, case studies and
                    evidence-based publications spanning healthcare,
                    public health, software engineering, digital
                    transformation and data science.

                </p>

                <div className="research-hero-actions">

                    <button className="research-primary-btn">

                        Browse Publications

                        <i className="bi bi-arrow-right"></i>

                    </button>

                </div>

            </div>

            <div className="research-metrics">

                <div className="metric-card">

                    <span className="metric-number">

                        {contributions.length}

                    </span>

                    <span className="metric-label">

                        Publications

                    </span>

                </div>

                <div className="metric-card">

                    <span className="metric-number">

                        {categories.length}

                    </span>

                    <span className="metric-label">

                        Categories

                    </span>

                </div>

                <div className="metric-card">

                    <span className="metric-number">

                        10+

                    </span>

                    <span className="metric-label">

                        Research Themes

                    </span>

                </div>

                <div className="metric-card">

                    <span className="metric-number">

                        5

                    </span>

                    <span className="metric-label">

                        Disciplines

                    </span>

                </div>

            </div>

        </header>

    );

}

export default ResearchHero;
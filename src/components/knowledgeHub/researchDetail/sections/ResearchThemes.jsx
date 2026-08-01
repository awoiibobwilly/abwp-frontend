import PropTypes from "prop-types";

function ResearchThemes({ themes }) {

    if (!themes?.length) {

        return null;

    }

    return (

        <section
            className="research-section"
            aria-labelledby="research-themes-heading"
        >

            <h2 id="research-themes-heading">

                Research Themes

            </h2>

            <div className="research-chip-group">

                {

                    themes.map((theme) => (

                        <span
                            key={theme.id ?? theme.slug ?? theme.title ?? theme.name}
                            className="theme-chip"
                        >

                            <i className="bi bi-diagram-3" />

                            {theme.title ?? theme.name ?? theme}

                        </span>

                    ))

                }

            </div>

        </section>

    );

}

ResearchThemes.propTypes = {

    themes: PropTypes.array,

};

ResearchThemes.defaultProps = {

    themes: [],

};

export default ResearchThemes;
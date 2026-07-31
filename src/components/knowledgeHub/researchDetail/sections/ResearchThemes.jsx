import PropTypes from "prop-types";

function ResearchThemes({

    themes,

}) {

    if (!themes?.length) {

        return null;

    }

    return (

        <>

            <h2>

                Research Themes

            </h2>

            <ul>

                {

                    themes.map(theme => (

                        <li
                            key={theme.id ?? theme.slug ?? theme.title}
                        >
                            {theme.title ?? theme.name ?? theme}
                        </li>

                    ))

                }

            </ul>

        </>

    );

}

ResearchThemes.propTypes = {

    themes: PropTypes.array,

};

ResearchThemes.defaultProps = {

    themes: [],

};

export default ResearchThemes;
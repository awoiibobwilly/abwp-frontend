import PropTypes from "prop-types";

function ResearchTags({ tags }) {

    if (!tags?.length) {

        return null;

    }

    return (

        <section
            className="research-section"
            aria-labelledby="research-tags-heading"
        >

            <h2 id="research-tags-heading">

                Keywords

            </h2>

            <div className="research-chip-group">

                {

                    tags.map((tag) => {

                        const key =
                            tag.id ??
                            tag.slug ??
                            tag.name ??
                            tag;

                        const label =
                            tag.name ??
                            tag.label ??
                            tag;

                        return (

                            <span
                                key={key}
                                className="tag-chip"
                            >

                                {label}

                            </span>

                        );

                    })

                }

            </div>

        </section>

    );

}

ResearchTags.propTypes = {

    tags: PropTypes.array,

};

ResearchTags.defaultProps = {

    tags: [],

};

export default ResearchTags;
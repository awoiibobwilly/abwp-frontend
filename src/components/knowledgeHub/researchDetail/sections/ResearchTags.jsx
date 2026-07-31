import PropTypes from "prop-types";

function ResearchTags({

    tags,

}) {

    if (!tags?.length) {

        return null;

    }

    return (

        <section className="research-tags">

            <h2>

                Keywords

            </h2>

            <div className="research-tags-list">

                {

                    tags.map(tag => {

                        const key =
                                    tag.id ??
                                    tag.slug ??
                                    tag.title ??
                                    tag.name ??
                                    tag;

                        const label =
                                    tag.title ??
                                    tag.name ??
                                    tag.label ??
                                    tag;

                        return (

                            <span

                                key={key}

                                className="research-tag"

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
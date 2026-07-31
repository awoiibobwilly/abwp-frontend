import PropTypes from "prop-types";

function ContentRenderer({

    registry,

    data,

}) {

    if (!registry?.length) {

        return null;

    }

    return (

        <>

            {

                registry.map(section => {

                    const {

                        id,

                        component: Component,

                        getProps,

                    } = section;

                    const props =

                        typeof getProps === "function"

                            ? getProps(data)

                            : {};

                    return (

                        <section

                            key={id}

                            id={id}

                            className="research-section"

                        >

                            <Component

                                {...props}

                            />

                        </section>

                    );

                })

            }

        </>

    );

}

ContentRenderer.propTypes = {

    registry: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            component: PropTypes.elementType.isRequired,

            getProps: PropTypes.func,

        })

    ).isRequired,

    data: PropTypes.object,

};

ContentRenderer.defaultProps = {

    data: {},

};

export default ContentRenderer;
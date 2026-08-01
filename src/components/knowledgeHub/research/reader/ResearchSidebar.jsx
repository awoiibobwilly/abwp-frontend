import PropTypes from "prop-types";

import {

    InfoSidebar,
    InfoCard,
    InfoCardItem,
    InfoAction,

} from "../../../common/InfoSidebar";

function ResearchSidebar({

    author,

    publication,

    statistics,

    actions,

}) {

    return (

        <InfoSidebar>

            {/* ==========================================
                AUTHOR
            ========================================== */}

            <InfoCard
                title="Author"
                icon="bi bi-person-circle"
            >

                <div className="research-author">

                    {author.photo && (

                        <img

                            src={author.photo}

                            alt={author.name}

                            className="research-author-photo"

                        />

                    )}

                    <h4>

                        {author.name}

                    </h4>

                    {author.role && (

                        <p>

                            {author.role}

                        </p>

                    )}

                    {author.organization && (

                        <p>

                            {author.organization}

                        </p>

                    )}

                </div>

            </InfoCard>

            {/* ==========================================
                PUBLICATION
            ========================================== */}

            <InfoCard title="Publication" icon="bi bi-journal-bookmark">

            {publication.type && (
                <InfoCardItem
                    label="Type"
                    value={publication.type}
                />
            )}

            {publication.institution && (
                <InfoCardItem
                    label="Institution"
                    value={publication.institution}
                />
            )}

            {publication.date && (
                <InfoCardItem
                    label="Published"
                    value={publication.date}
                />
            )}

            {publication.readingTime && (
                <InfoCardItem
                    label="Reading Time"
                    value={publication.readingTime}
                />
            )}

            {publication.doi && (
                <InfoCardItem
                    label="DOI"
                    value={publication.doi}
                    href={`https://doi.org/${publication.doi}`}
                />
            )}

            </InfoCard>

            {/* ==========================================
                STATISTICS
            ========================================== */}

            {!!statistics.length && (

                <InfoCard
                    title="Statistics"
                    icon="bi bi-graph-up"
                >

                    {statistics.map((item) => (

                        <InfoCardItem

                            key={item.label}

                            label={item.label}

                            value={item.value}

                            icon={item.icon}

                        />

                    ))}

                </InfoCard>

            )}

            {/* ==========================================
                ACTIONS
            ========================================== */}

            {!!actions.length && (

                <InfoCard
                    title="Quick Actions"
                    icon="bi bi-lightning"
                >

                    {actions.map((action) => (

                        <InfoAction

                            key={action.id}

                            {...action}

                        />

                    ))}

                </InfoCard>

            )}

        </InfoSidebar>

    );

}

ResearchSidebar.propTypes = {

    author: PropTypes.shape({

        name: PropTypes.string.isRequired,

        role: PropTypes.string,

        organization: PropTypes.string,

        photo: PropTypes.string,

    }).isRequired,

    publication: PropTypes.shape({

        type: PropTypes.string,

        institution: PropTypes.string,

        date: PropTypes.string,

        readingTime: PropTypes.string,

        doi: PropTypes.string,

    }).isRequired,

    statistics: PropTypes.arrayOf(

        PropTypes.shape({

            label: PropTypes.string.isRequired,

            value: PropTypes.oneOfType([

                PropTypes.string,

                PropTypes.number,

            ]).isRequired,

            icon: PropTypes.string,

        })

    ),

    actions: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            label: PropTypes.string.isRequired,

            icon: PropTypes.string.isRequired,

            href: PropTypes.string,

            onClick: PropTypes.func,

            external: PropTypes.bool,

        })

    ),

};

ResearchSidebar.defaultProps = {

    statistics: [],

    actions: [],

};

export default ResearchSidebar;
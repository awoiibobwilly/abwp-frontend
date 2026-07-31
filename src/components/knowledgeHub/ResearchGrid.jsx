import ResearchContributionCard from "./ResearchContributionCard";

function ResearchGrid({

    contributions,

    onViewResearch,

}) {

    return (

        <section className="research-grid">

            {

                contributions.map(contribution => (

                    <ResearchContributionCard

                        key={contribution.id}

                        contribution={contribution}

                        onViewResearch={onViewResearch}

                    />

                ))

            }

        </section>

    );

}

export default ResearchGrid;
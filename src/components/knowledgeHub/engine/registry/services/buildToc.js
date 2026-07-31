/**
 * Builds the table of contents.
 *
 * @param {Array} researchRegistry
 * @param {Array} tocRegistry
 * @returns {Array}
 */

export default function buildToc(

    researchRegistry,

    tocRegistry,

) {

    return tocRegistry

        .map(id =>

            researchRegistry.find(

                section =>

                    section.id === id

            )

        )

        .filter(Boolean)

        .map(section => ({

            id: section.id,

            title: section.title,

        }));

}
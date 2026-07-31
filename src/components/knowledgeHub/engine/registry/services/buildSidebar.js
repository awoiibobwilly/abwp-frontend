/**
 * Builds sidebar cards.
 *
 * @param {Object} options
 * @param {Array} options.sidebarRegistry
 * @param {Array} options.metadata
 * @param {Array} options.actions
 * @returns {Array}
 */

export default function buildSidebar({

    sidebarRegistry,

    metadata,

    actions,

}) {

    return sidebarRegistry

        .map(card => {

            switch (card.section) {

                case "metadata":

                    return {

                        id: card.id,

                        title: card.title,

                        items: metadata,

                    };

                case "actions":

                    return {

                        id: card.id,

                        title: card.title,

                        items: actions,

                    };

                default:

                    return null;

            }

        })

        .filter(Boolean);

}
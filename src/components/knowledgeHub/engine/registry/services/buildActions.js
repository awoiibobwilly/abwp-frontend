/**
 * Builds research actions.
 *
 * @param {Object} research
 * @param {Array} registry
 * @returns {Array}
 */

export default function buildActions(

    research,

    registry,

) {

    if (!research) {

        return [];

    }

    return registry

        .filter(action =>

            action.visible(research)

        )

        .map(action => ({

            id: action.id,

            label: action.label,

            icon: action.icon,

            href: action.href(research),

        }));

}
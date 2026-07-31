/**
 * Builds publication metadata from the view model.
 *
 * @param {Object} research
 * @param {Array} registry
 * @returns {Array}
 */

export default function buildMetadata(

    research,

    registry,

) {

    if (!research) {

        return [];

    }

    return registry

        .map(item => {

            const value = research[item.field];

            if (!value) {

                return null;

            }

            return {

                id: item.id,

                label: item.label,

                value,

                type: item.type ?? "text",

                href: item.href
                    ? item.href(value)
                    : null,

            };

        })

        .filter(Boolean);

}
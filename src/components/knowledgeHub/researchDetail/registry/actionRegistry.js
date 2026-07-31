const actionRegistry = [

    {

        id: "download",

        label: "Download PDF",

        icon: "bi bi-download",

        visible: research => Boolean(research.document),

        href: research => research.document,

    },

    {

        id: "doi",

        label: "View DOI",

        icon: "bi bi-link-45deg",

        visible: research => Boolean(research.doi),

        href: research => `https://doi.org/${research.doi}`,

    },

    {

        id: "external",

        label: "Visit Publication",

        icon: "bi bi-box-arrow-up-right",

        visible: research => Boolean(research.externalUrl),

        href: research => research.externalUrl,

    },

];

export default actionRegistry;
const metadataRegistry = [

    {

        id: "publication",

        label: "Publication",

        field: "publication",

    },

    {

        id: "publication-date",

        label: "Publication Date",

        field: "publicationDate",

    },

    {

        id: "contribution-type",

        label: "Contribution Type",

        field: "contributionType",

    },

    {

        id: "doi",

        label: "DOI",

        field: "doi",

        type: "link",

        href: value => `https://doi.org/${value}`,

    },

];

export default metadataRegistry;
export default function createResearchViewModel(research) {

    if (!research) {
        return null;
    }

    const resources = [];

    if (research.document) {
        resources.push({
            id: "document",
            type: "document",
            label: "Download Research",
            url: research.document,
        });
    }

    if (research.external_url) {
        resources.push({
            id: "external",
            type: "external",
            label: "View Publication",
            url: research.external_url,
        });
    }

    return {

        /* ==========================================
           CORE RESEARCH DATA
        ========================================== */

        id: research.id,
        title: research.title,
        slug: research.slug,
        summary: research.summary,
        abstract: research.abstract,

        publication: research.publication,
        publicationDate: research.publication_date,

        contributionType: research.contribution_type,
        contributionTypeDisplay:
            research.contribution_type_display,

        coverImage: research.cover_image,

        document: research.document,
        externalUrl: research.external_url,

        doi: research.doi,

        themes: research.themes ?? [],
        tags: research.tags ?? [],

        resources,

        /* ==========================================
           SIDEBAR
        ========================================== */

        author: {

            // Update these when the backend exposes
            // actual author information.

            name: "Awoii Bob Willy",

            role: null,

            organization: null,

            photo: null,

        },

        publicationInfo: {

            type:
                research.contribution_type_display,

            institution:
                research.publication,

            date:
                research.publication_date,

            readingTime: null,

            doi:
                research.doi,

        },

        metadata: [
            {
                id: "type",
                label: "Contribution Type",
                value: research.contribution_type_display,
            },
            {
                id: "publication",
                label: "Publication",
                value: research.publication,
            },
            {
                id: "date",
                label: "Publication Date",
                value: research.publication_date,
            },
            {
                id: "doi",
                label: "DOI",
                value: research.doi,
                href: research.doi
                    ? `https://doi.org/${research.doi}`
                    : undefined,
            },
        ].filter(item => item.value),

        statistics: [],

        actions: resources.map(resource => ({

            id: resource.id,

            label: resource.label,

            icon:
                resource.type === "document"
                    ? "bi bi-download"
                    : "bi bi-box-arrow-up-right",

            href: resource.url,

            external:
                resource.type === "external",

        })),

        /* ==========================================
           RELATED PUBLICATIONS
        ========================================== */

        relatedPublications:
            research.related_publications ?? [],

    };

}
export default function createArchiveViewModel(response) {

    /* ==========================================
       EMPTY RESPONSE
    ========================================== */

    if (!response) {

        return {

            meta: {

                count: 0,

                next: null,

                previous: null,

            },

            items: [],

        };

    }

    /* ==========================================
       SUPPORT BOTH
       - Raw Array
       - Paginated Response
    ========================================== */

    const publications =

        Array.isArray(response)

            ? response

            : response.results ?? [];

    return {

        /* ==========================================
           COLLECTION METADATA
        ========================================== */

        meta: {

            count:

                Array.isArray(response)

                    ? publications.length

                    : response.count ?? publications.length,

            next:

                Array.isArray(response)

                    ? null

                    : response.next,

            previous:

                Array.isArray(response)

                    ? null

                    : response.previous,

        },

        /* ==========================================
           PUBLICATIONS
        ========================================== */

        items: publications.map((publication) => ({

            id: publication.id,

            slug: publication.slug,

            title: publication.title,

            summary: publication.summary,

            abstract: publication.abstract,

            coverImage: publication.cover_image,

            publication: publication.publication,

            publicationDate: publication.publication_date,

            publicationYear:

                publication.publication_date

                    ? new Date(
                        publication.publication_date
                    ).getFullYear()

                    : "Ongoing",

            contributionType:

                publication.contribution_type,

            contributionTypeDisplay:

                publication.contribution_type_display,

            document:

                publication.document,

            externalUrl:

                publication.external_url,

            doi:

                publication.doi,

            themes:

                publication.themes ?? [],

            tags:

                publication.tags ?? [],

            detailUrl:

                `/knowledge-hub/research-contributions/${publication.slug}`,

        })),

    };

}
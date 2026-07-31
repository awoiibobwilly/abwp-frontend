/* ==========================================
   NORMALIZERS
========================================== */

function mapThemes(themes = []) {

    return themes.map(theme => ({

        id:
            theme.id ??
            theme.slug ??
            String(theme),

        label:
            theme.name ??
            theme.label ??
            String(theme),

    }));

}

function mapTags(tags = []) {

    return tags.map(tag => ({

        id:
            tag.id ??
            tag.slug ??
            String(tag),

        label:
            tag.name ??
            tag.label ??
            tag.title ??
            String(tag),

    }));

}

function mapResources(resources = []) {

    return resources.map(resource => ({

        id:
            resource.id,

        title:
            resource.title ??
            resource.name ??
            "Untitled Resource",

        url:
            resource.url ??
            resource.href ??
            "#",

        type:
            resource.type ??
            "resource",

    }));

}

function mapRelated(publications = []) {

    return publications.map(publication => ({

        id:
            publication.id,

        slug:
            publication.slug,

        title:
            publication.title,

        summary:
            publication.summary,

        coverImage:
            publication.cover_image,

    }));

}

/* ==========================================
   VIEW MODEL
========================================== */

export default function createResearchViewModel(research) {

    if (!research) {

        return null;

    }

    return {

        /* ----------------------------------
           Identity
        ---------------------------------- */

        id:
            research.id,

        slug:
            research.slug,

        title:
            research.title,

        summary:
            research.summary,

        abstract:
            research.abstract,

        /* ----------------------------------
           Publication
        ---------------------------------- */

        publication:
            research.publication,

        publicationDate:
            research.publication_date,

        contributionType:
            research.contribution_type,

        doi:
            research.doi,

        externalUrl:
            research.external_url,

        /* ----------------------------------
           Media
        ---------------------------------- */

        coverImage:
            research.cover_image,

        document:
            research.document,

        /* ----------------------------------
           Collections
        ---------------------------------- */

        themes:

            mapThemes(

                research.themes

            ),

        tags:

            mapTags(

                research.tags

            ),

        resources:

            mapResources(

                research.resources

            ),

        related:

            mapRelated(

                research.related_publications

            ),

    };

}
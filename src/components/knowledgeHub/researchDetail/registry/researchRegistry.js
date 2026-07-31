import ResearchAbstract
    from "../sections/ResearchAbstract";

import ResearchMetadata
    from "../sections/ResearchMetadata";

import ResearchThemes
    from "../sections/ResearchThemes";

import ResearchTags
    from "../sections/ResearchTags";

import ResearchResources
    from "../sections/ResearchResources";

const researchRegistry = [

    {
        id: "abstract",

        title: "Abstract",

        component: ResearchAbstract,

        order: 10,

        getProps: (research) => ({

            abstract: research.abstract,

        }),

    },

    {
        id: "metadata",

        title: "Publication Information",

        component: ResearchMetadata,

        order: 20,

        getProps: (research) => ({

            metadata: research.metadata,

        }),

    },

    {
        id: "themes",

        title: "Research Themes",

        component: ResearchThemes,

        order: 30,

        getProps: (research) => ({

            themes: research.themes,

        }),

    },

    {
        id: "tags",

        title: "Keywords",

        component: ResearchTags,

        order: 40,

        getProps: (research) => ({

            tags: research.tags,

        }),

    },

    {
        id: "resources",

        title: "Resources",

        component: ResearchResources,

        order: 50,

        getProps: (research) => ({

            resources: research.resources,

        }),

    },

].sort((a, b) => a.order - b.order);

export default researchRegistry;
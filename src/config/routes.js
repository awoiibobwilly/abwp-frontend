/* ==========================================
   APPLICATION ROUTES
========================================== */

export const ROUTES = {

    HOME: "/",

    ABOUT: "/about",

    JOURNEY: "/journey",

    PROJECTS: "/projects",

    RESEARCH: "/research",

    KNOWLEDGE_HUB: "/knowledge-hub",

    INSIGHTS: "/insights",

    CV: "/cv",

    CONTACT: "/contact",

};

/* ==========================================
   KNOWLEDGE HUB
========================================== */

export const KNOWLEDGE_HUB_ROUTES = {

    HOME: "/knowledge-hub",

    RESEARCH: "/knowledge-hub/research-contributions",

    researchDetail: slug =>

        `/knowledge-hub/research-contributions/${slug}`,

};
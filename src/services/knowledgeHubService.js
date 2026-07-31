import api from "./api";

import { ENDPOINTS } from "./endpoints";

import {
    normalizeCollection,
    normalizeObject,
    handleApiError,
} from "../api/helpers";


/* ==========================================
   GENERIC GET REQUEST
========================================== */

const getResource = async (
    endpoint,
    normalize,
    signal
) => {

    try {

        const { data } = await api.get(
            endpoint,
            { signal }
        );

        return normalize(data);

    }

    catch (error) {

        handleApiError(error);

    }

};

/* ==========================================
   KNOWLEDGE HUB
========================================== */

export const getKnowledgeHub = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.KNOWLEDGE_HUB,
        normalizeObject,
        signal
    );


/* ==========================================
   SEARCH CONFIGURATION
========================================== */

export const getSearchConfiguration = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.SEARCH_CONFIGURATION,
        normalizeObject,
        signal
    );


/* ==========================================
   FEATURED_COLLECTIONS
========================================== */

export const getFeaturedCollections = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.FEATURED_COLLECTIONS,
        normalizeCollection,
        signal
    );

/* ==========================================
   THEMES
========================================== */

export const getThemes = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.THEMES,
        normalizeCollection,
        signal
    );

/* ==========================================
   TAGS
========================================== */

export const getTags = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.TAGS,
        normalizeCollection,
        signal
    );

/* ==========================================
   ORGANIZATIONS
========================================== */

export const getOrganizations = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.ORGANIZATIONS,
        normalizeCollection,
        signal
    );

/* ==========================================
   LIBRARY RESOURCES
========================================== */

export const getLibraryResources = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.LIBRARY_RESOURCES,
        normalizeCollection,
        signal
    );

/* ==========================================
   LEARNING VIDEOS
========================================== */

export const getLearningVideos = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.LEARNING_VIDEOS,
        normalizeCollection,
        signal
    );

/* ==========================================
   RESOURCE DIRECTORY
========================================== */

export const getPracticalResources = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.PRACTICAL_RESOURCES,
        normalizeCollection,
        signal
    );
    
/* ==========================================
   RESEARCH CONTRIBUTIONS
========================================== */

export const getResearchContributions = ({ signal } = {}) =>
    getResource(
        ENDPOINTS.RESEARCH_CONTRIBUTIONS,
        normalizeCollection,
        signal
    );

/* ==========================================
   RESEARCH DETAIL
========================================== */

export const getResearchContributionBySlug = async (
    slug,
    { signal } = {}
) => {

    const researchContributions =
        await getResearchContributions({ signal });

    return (

        researchContributions.find(

            research => research.slug === slug

        ) || null

    );

};
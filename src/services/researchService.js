import api from "./api";

/* ==========================================================================
   Research Service
   ========================================================================== */

/**
 * Homepage Research Preview
 * GET /api/home/research/
 */
export const getResearchPreview = async () => {

    const response = await api.get(
        "/home/research/"
    );

    return response.data;

};


/**
 * Research List
 * GET /api/research/
 */
export const getResearchList = async () => {

    const response = await api.get(
        "/research/"
    );

    return response.data;

};


/**
 * Research Detail
 * GET /api/research/:slug/
 */
export const getResearchDetail = async (
    slug
) => {

    const response = await api.get(
        `/research/${slug}/`
    );

    return response.data;

};
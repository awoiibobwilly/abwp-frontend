import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

/* ==========================================
   API ENDPOINTS
========================================== */

const FEATURED_PROJECTS_URL =
  "/home/featured-projects/";

/* ==========================================
   FEATURED PROJECTS
========================================== */

export const getFeaturedProjects = async () => {

  try {

    const response = await api.get(
      FEATURED_PROJECTS_URL
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
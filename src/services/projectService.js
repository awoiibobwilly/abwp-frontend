import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   FEATURED PROJECTS
========================================== */

export const getFeaturedProjects = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.FEATURED_PROJECTS
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
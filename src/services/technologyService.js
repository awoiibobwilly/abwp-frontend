import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   TECHNOLOGIES
========================================== */

export const getTechnologies = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.TECHNOLOGIES
    );

    return normalizeCollection(
      response.data
    );

  }

  catch (error) {

    handleApiError(error);

  }

};
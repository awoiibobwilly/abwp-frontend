import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   EXPERTISE
========================================== */

export const getExpertise = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.EXPERTISE
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
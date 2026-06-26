import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   HIGHLIGHTS
========================================== */

export const getHighlights = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.HIGHLIGHTS
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
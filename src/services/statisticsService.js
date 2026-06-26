import api from "./api";

import {
  normalizeCollection,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   STATISTICS
========================================== */

export const getStatistics = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.STATISTICS
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
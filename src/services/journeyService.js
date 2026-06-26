import api from "./api";

import {
  normalizeCollection,
  normalizeObject,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   JOURNEY PREVIEW
========================================== */

export const getJourneyPreview = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.JOURNEY
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};

/* ==========================================
   FULL JOURNEY
========================================== */

export const getJourney = async () => {

  try {

    const response = await api.get(
      ENDPOINTS.JOURNEY
    );

    return normalizeCollection(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};

/* ==========================================
   JOURNEY DETAIL
========================================== */

export const getJourneyDetail = async (slug) => {

  try {

    const response = await api.get(
      `${ENDPOINTS.JOURNEY}${slug}/`
    );

    return normalizeObject(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
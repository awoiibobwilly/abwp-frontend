import api from "./api";

import {
  normalizeCollection,
  normalizeObject,
  handleApiError,
} from "./apiHelpers";

/* ==========================================
   API ENDPOINTS
========================================== */

const JOURNEY_URL = "/home/journey/";

/* ==========================================
   JOURNEY PREVIEW
========================================== */

export const getJourneyPreview = async () => {

  try {

    const response = await api.get(
      JOURNEY_URL
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
      JOURNEY_URL
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
      `${JOURNEY_URL}${slug}/`
    );

    return normalizeObject(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
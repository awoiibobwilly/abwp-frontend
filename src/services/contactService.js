import api from "./api";

import {
  normalizeObject,
  handleApiError,
} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   CONTACT
========================================== */

export const sendContactMessage = async (data) => {

  try {

    const response = await api.post(
      ENDPOINTS.CONTACT,
      data
    );

    return normalizeObject(
      response.data
    );

  } catch (error) {

    handleApiError(error);

  }

};
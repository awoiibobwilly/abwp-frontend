import api from "./api";

import {

  normalizeCollection,

  handleApiError,

} from "./apiHelpers";

import { ENDPOINTS } from "./endpoints";

/* ==========================================
   FEATURED TESTIMONIALS
========================================== */

export const getFeaturedTestimonials = async () => {

  try {

    const response = await api.get(

      ENDPOINTS.FEATURED_TESTIMONIALS

    );

    return normalizeCollection(

      response.data

    );

  }

  catch (error) {

    handleApiError(error);

  }

};

/* ==========================================
   TESTIMONIALS
========================================== */

export const getTestimonials = async () => {

  try {

    const response = await api.get(

      ENDPOINTS.TESTIMONIALS

    );

    return normalizeCollection(

      response.data

    );

  }

  catch (error) {

    handleApiError(error);

  }

};
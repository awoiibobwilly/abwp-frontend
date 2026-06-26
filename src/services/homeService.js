import api from "./api";

import {

  normalizeCollection,

  handleApiError,

} from "./apiHelpers";

/* ==========================================
   STATISTICS
========================================== */

export const getStatistics = async () => {

  try {

    const response = await api.get(

      "/home/statistics/"

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
   EXPERTISE
========================================== */

export const getExpertise = async () => {

  try {

    const response = await api.get(

      "/home/expertise/"

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
   HIGHLIGHTS
========================================== */

export const getHighlights = async () => {

  try {

    const response = await api.get(

      "/home/highlights/"

    );

    return normalizeCollection(

      response.data

    );

  }

  catch (error) {

    handleApiError(error);

  }

};
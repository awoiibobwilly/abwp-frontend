import axios from "axios";

const API_URL =
`${import.meta.env.VITE_API_BASE_URL}/home/journey/`;

/* ==========================================
   Journey Preview
========================================== */

export const getJourneyPreview = async () => {

  try {

    const response = await axios.get(API_URL);

    return response.data;

  }

  catch (error) {

    if (error.response) {

      throw error.response.data;

    }

    if (error.request) {

      throw {

        detail:
          "Unable to connect to the server.",

      };

    }

    throw {

      detail:
        "Unexpected error.",

    };

  }

};

/* ==========================================
   Full Journey
========================================== */

export const getJourney = getJourneyPreview;

/* ==========================================
   Journey Detail
========================================== */

export const getJourneyDetail = async (
  slug
) => {

  try {

    const response = await axios.get(

      `${API_URL}${slug}/`

    );

    return response.data;

  }

  catch (error) {

    if (error.response) {

      throw error.response.data;

    }

    throw {

      detail:
        "Unexpected error.",

    };

  }

};
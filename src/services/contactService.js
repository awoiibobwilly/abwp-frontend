import api from "./api";

import {

  normalizeObject,

  handleApiError,

} from "./apiHelpers";


export const sendContactMessage = async (data) => {

  try {

    const response = await api.post(

      "/contact/",

      data,

    );

    return normalizeObject(

      response.data

    );

  }

  catch (error) {

    handleApiError(error);

  }

};
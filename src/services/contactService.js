import axios from "axios";

const API_URL =
`${import.meta.env.VITE_API_BASE_URL}/contact/`;

export const sendContactMessage = async (data) => {

  try {

    const response = await axios.post(
      API_URL,
      data
    );

    return response.data;

  }

  catch (error) {

    throw (
      error.response?.data ||
      error.message
    );

  }

};
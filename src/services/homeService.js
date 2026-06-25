import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/home/statistics/`;

export const getStatistics = async () => {

  const response = await axios.get(

    API_URL

  );

  return response.data;

};

export const getExpertise = async () => {

  const response = await axios.get(

    `${import.meta.env.VITE_API_BASE_URL}/home/expertise/`

  );

  return response.data;

};

export const getHighlights = async () => {

  const response = await axios.get(

    `${import.meta.env.VITE_API_BASE_URL}/home/highlights/`

  );

  return response.data;

};
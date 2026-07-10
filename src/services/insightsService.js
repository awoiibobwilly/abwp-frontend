import api from "./api";
import { handleApiError } from "./apiHelpers";
import { ENDPOINTS } from "./endpoints";

export const getInsightsPage = async () => {
  try {
    const response = await api.get(
      ENDPOINTS.INSIGHTS_PAGE
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
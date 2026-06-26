/* ==========================================
   COLLECTION NORMALIZER
========================================== */

export const normalizeCollection = (data) => {

    if (Array.isArray(data)) {
      return data;
    }
  
    return data?.results || [];
  
  };
  
  
  /* ==========================================
     SINGLE OBJECT NORMALIZER
  ========================================== */
  
  export const normalizeObject = (data) => {
  
    return data || {};
  
  };
  
  
  /* ==========================================
     API ERROR HANDLER
  ========================================== */
  
  export const handleApiError = (error) => {
  
    if (error.response) {
      throw error.response.data;
    }
  
    if (error.request) {
      throw {
        detail: "Unable to connect to the server. Please try again later.",
      };
    }
  
    throw {
      detail: "An unexpected error occurred.",
    };
  
  };
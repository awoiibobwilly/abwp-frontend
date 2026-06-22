// src/utils/getErrorMessage.js

export const getErrorMessage = (error) => {
    // 1. Handle global/detail errors first
    if (error?.detail) {
        return error.detail;
    }

    // 2. Safely get the first validation key
    if (error && typeof error === 'object') {
        const keys = Object.keys(error);
        if (keys.length > 0) {
            const firstKey = keys[0];
            const errorValue = error[firstKey];

            // If the value is an array, extract the first message string
            if (Array.isArray(errorValue) && errorValue.length > 0) {
                return errorValue[0];
            }
            
            // Fallback if the value is just a direct string
            if (typeof errorValue === 'string') {
                return errorValue;
            }
        }
    }

    return "An unexpected error occurred.";
};
/**
 * ==========================================
 * GET ERROR MESSAGE
 * ==========================================
 */

export function getErrorMessage(error) {

    // Native JavaScript Error
    if (error instanceof Error) {

        return error.message;

    }

    // Axios / DRF response
    const responseData = error?.response?.data;

    if (responseData) {

        // Global DRF error
        if (responseData.detail) {

            return responseData.detail;

        }

        // Validation errors
        if (typeof responseData === "object") {

            const keys = Object.keys(responseData);

            if (keys.length > 0) {

                const firstValue = responseData[keys[0]];

                if (

                    Array.isArray(firstValue) &&

                    firstValue.length > 0

                ) {

                    return firstValue[0];

                }

                if (typeof firstValue === "string") {

                    return firstValue;

                }

            }

        }

    }

    // Direct object with detail
    if (error?.detail) {

        return error.detail;

    }

    // Plain string
    if (typeof error === "string") {

        return error;

    }

    return "Unable to process your request. Please try again.";

}
import { useState, useEffect, useCallback } from "react";

/**
 * ==========================================================
 * useApiResource
 * ----------------------------------------------------------
 * Generic hook for fetching API resources.
 *
 * Features:
 * - Loading state
 * - Error handling
 * - AbortController support
 * - Manual refresh
 * - Works with any GET service
 * ==========================================================
 */

function useApiResource(fetchFunction) {

    // ======================================================
    // State
    // ======================================================

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    // ======================================================
    // Fetch Resource
    // ======================================================

    const fetchData = useCallback(

        async (signal) => {

            try {

                setLoading(true);

                setError("");

                const result = await fetchFunction({

                    signal,

                });

                setData(result);

            }

            catch (err) {

                if (

                    err?.name === "AbortError" ||

                    err?.name === "CanceledError"

                ) {

                    return;

                }

                console.error(

                    "API Resource Error:",

                    err

                );

                setError(

                    err?.response?.data?.detail ||

                    err?.message ||

                    "Unable to load data."

                );

            }

            finally {

                setLoading(false);

            }

        },

        [fetchFunction]

    );

    // ======================================================
    // Initial Fetch
    // ======================================================

    useEffect(() => {

        const controller = new AbortController();

        fetchData(controller.signal);

        return () => {

            controller.abort();

        };

    }, [fetchData]);

    // ======================================================
    // Manual Refresh
    // ======================================================

    const refresh = () => {

        const controller = new AbortController();

        fetchData(controller.signal);

    };

    // ======================================================
    // Hook API
    // ======================================================

    return {

        data,

        loading,

        error,

        refresh,

    };

}

export default useApiResource;
import { useState, useEffect, useCallback } from "react";

/**
 * ==========================================================
 * useApiResource
 * ==========================================================
 */

function useApiResource(fetchFunction, initialData = null) {

    const [data, setData] = useState(initialData);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const fetchData = useCallback(

        async (signal) => {

            try {

                setLoading(true);

                setError("");

                const result = await fetchFunction({

                    signal,

                });

                if (signal.aborted) {

                    return;

                }

                setData(result);

            }

            catch (err) {

                if (

                    signal.aborted ||

                    err?.code === "ERR_CANCELED"

                ) {

                    return;

                }

                console.error(

                    "API Resource Error:",

                    err

                );

                setError(

                    err?.detail ||

                    err?.response?.data?.detail ||

                    err?.message ||

                    "Unable to load data."

                );

            }

            finally {

                if (!signal.aborted) {

                    setLoading(false);

                }

            }

        },

        [fetchFunction]

    );

    useEffect(() => {

        const controller = new AbortController();

        fetchData(controller.signal);

        return () => {

            controller.abort();

        };

    }, [fetchData]);

    const refresh = useCallback(() => {

        const controller = new AbortController();

        fetchData(controller.signal);

    }, [fetchData]);

    return {

        data,

        loading,

        error,

        refresh,

    };

}

export default useApiResource;
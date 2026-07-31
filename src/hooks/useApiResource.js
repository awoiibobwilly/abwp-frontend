import {
    useState,
    useEffect,
    useCallback,
    useRef,
} from "react";

/* ==========================================
   ERROR HELPER
========================================== */

function getErrorMessage(error) {

    return (

        error?.response?.data?.message ||

        error?.response?.data?.detail ||

        error?.detail ||

        error?.message ||

        "Unable to load data."

    );

}

/* ==========================================
   API RESOURCE HOOK
========================================== */

function useApiResource(

    fetchFunction,

    {

        initialData = null,

        immediate = true,

    } = {}

) {

    const [data, setData] = useState(initialData);

    const [loading, setLoading] = useState(immediate);

    const [error, setError] = useState(null);

    const controllerRef = useRef(null);

    const fetchData = useCallback(

        async () => {

            controllerRef.current?.abort();

            const controller = new AbortController();

            controllerRef.current = controller;

            try {

                setLoading(true);

                setError(null);

                const result = await fetchFunction({

                    signal: controller.signal,

                });

                if (controller.signal.aborted) {

                    return;

                }

                setData(result);

                return result;

            }

            catch (err) {

                if (

                    controller.signal.aborted ||

                    err?.code === "ERR_CANCELED"

                ) {

                    return null;

                }

                if (import.meta.env.DEV) {

                    console.error(

                        "API Resource Error:",

                        err

                    );

                }

                setError(

                    getErrorMessage(err)

                );

                return null;

            }

            finally {

                if (

                    !controller.signal.aborted

                ) {

                    setLoading(false);

                }

            }

        },

        [fetchFunction]

    );

    useEffect(() => {

        if (!immediate) {

            return;

        }

        fetchData();

        return () => {

            controllerRef.current?.abort();

        };

    }, [

        fetchData,

        immediate,

    ]);

    return {

        data,

        setData,

        loading,

        error,

        reload: fetchData,

    };

}

export default useApiResource;
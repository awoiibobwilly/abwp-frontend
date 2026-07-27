import axios from "axios";

/* ==========================================
   AXIOS CLIENT
========================================== */

const api = axios.create({

    baseURL: import.meta.env.VITE_API_BASE_URL,

    timeout: 10000,

    headers: {

        "Content-Type": "application/json",

    },

});


/* ==========================================
   REQUEST INTERCEPTOR
========================================== */

api.interceptors.request.use(

    (config) => {

        return config;

    },

    (error) => Promise.reject(error)

);


/* ==========================================
   RESPONSE INTERCEPTOR
========================================== */

api.interceptors.response.use(

    (response) => response,

    (error) => Promise.reject(error)

);

export default api;
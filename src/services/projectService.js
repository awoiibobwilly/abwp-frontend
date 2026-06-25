import axios from "axios";

const API_URL =
`${import.meta.env.VITE_API_BASE_URL}/home/featured-projects/`;


export const getFeaturedProjects = async () => {

    try {

        const response = await axios.get(
            API_URL
        );

        return response.data;

    }

    catch (error) {

        if (error.response) {

            throw error.response.data;

        }

        if (error.request) {

            throw {

                detail:
                "Unable to connect to the server. Please try again later."

            };

        }

        throw {

            detail:
            "An unexpected error occurred."

        };

    }

};
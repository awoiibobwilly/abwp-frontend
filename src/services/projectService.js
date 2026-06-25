export const getProject = async (slug) => {

    const response = await api.get(

        `/home/projects/${slug}/`

    );

    return response.data;

};
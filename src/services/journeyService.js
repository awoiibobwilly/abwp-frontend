export const getJourney = async () => {

    const response = await api.get(
        "/home/journey/"
    );

    return response.data;

};
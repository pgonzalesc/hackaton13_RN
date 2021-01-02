import fetchApi from './fetchApi';

const podcastApi = {
    getPodcast: async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/podcast', config);
        return data;
    },
};

export default podcastApi;
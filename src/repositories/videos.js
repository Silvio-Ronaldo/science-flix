import api from '../services/api';

async function createNewVideo({ categoryId, title, url }) {
    await api.post('/videos', {
        categoryId,
        title,
        url
    });

    return;
}

export default createNewVideo;
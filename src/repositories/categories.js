import api from '../services/api';

async function getAllCategoriesWithVideos() {
    const { data } = await api.get('/categories?_embed=videos');

    return data;
}

export default getAllCategoriesWithVideos;
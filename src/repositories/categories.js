import api from '../services/api';

export async function getAllCategoriesWithVideos() {
    const { data } = await api.get('/categories?_embed=videos');

    return data;
}

export async function getOnlyCategories() {
    const { data } = await api.get('/categories');

    return data;
}
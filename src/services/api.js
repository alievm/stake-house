import axios from 'axios';

const API_BASE_URL = 'https://api-url.com';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

export default apiClient;
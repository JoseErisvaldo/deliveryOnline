import axiosClient from '@/lib/axiosClient';

export const fetchSupabase = async (endpoint, queryParams = '') => {
    const response = await axiosClient.get(`${endpoint}?${queryParams}`);
    return response.data;
};



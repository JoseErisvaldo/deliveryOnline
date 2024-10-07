import axiosClient from '@/lib/axiosClient';

export const fetchSupabaseID = async (id = null, api) => {
  try {
    let params = { select: '*' };

    if (id) {
      if (api === 'view_categories_client') {
        params = { establishment_id_category: `eq.${id}`, select: '*' };
      } else if (api === 'view_establishment') {
        params = { establishment_id: `eq.${id}`, select: '*' };
      }
    }

    const response = await axiosClient.get(`/rest/v1/${api}`, {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro na requisição');
  }
};

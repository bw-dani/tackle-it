
import api from './apiConfig';

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const addCategory = async (categoryId, taskId) => {
  const resp = await api.put(`/categories/${categoryId}/tasks/${taskId}`);
  return resp.data;
}
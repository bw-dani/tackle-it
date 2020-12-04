import api from './apiConfig';

export const getAllTasks = async () => {
  const resp = await api.get('/tasks');
  return resp.data;
}

export const getOneTask = async (id) => {
  const resp = await api.get(`/tasks/${id}`);
  return resp.data;
}

export const postTask = async (taskData) => {
  const resp = await api.post('/tasks', { task: taskData });
  return resp.data;
}

export const putTask = async (id, taskData) => {
  const resp = await api.put(`/tasks/${id}`, { task: taskData });
  return resp.data;
}

export const destroyTask = async (id) => {
  const resp = await api.delete(`/tasks/${id}`);
  return resp;
}
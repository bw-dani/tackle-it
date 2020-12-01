import axios from 'axios';

const baseUrl = 'https://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
})

export default api;
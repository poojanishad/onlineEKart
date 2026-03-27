import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getProducts = () => API.get('/products?limit=100');
export const getProductById = (id) => API.get(`/products/${id}`);
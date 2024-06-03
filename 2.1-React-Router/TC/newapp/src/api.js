// src/api.js
import axios from 'axios';

const API_URL = 'https://api.fake-rest.refine.dev/products';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

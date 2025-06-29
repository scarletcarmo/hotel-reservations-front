// src/api.ts
import { config } from '../config/config';
import axios from 'axios';

//Obtener token
const token = localStorage.getItem('token');

console.log("config.apiUrl", config.API_URL);

const api = axios.create({
    baseURL: config.API_URL,
    timeout: 1000,
    //withCredentials: false,
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
    },
});

export async function getUsers() {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        throw error;
    }
}

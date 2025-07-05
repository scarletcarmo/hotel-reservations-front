// src/api.ts
import { config } from '../config/config';
import axios from 'axios';
import { UserResponse } from '../models/userModel';

//Obtener token
const token = localStorage.getItem('token');

console.log("config.apiUrl", config.API_URL);

const api = axios.create({
    baseURL: config.API_URL,
    //timeout: 1000,
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

export async function post(user: any): Promise<UserResponse> {
    try {
        const response = await api.post<UserResponse>('/users', user);
        console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        if (error.response) {
            console.error("Respuesta del servidor:", error.response);
        }
        throw error;
    }
}

export async function put(user: any): Promise<UserResponse> {
    try {
        const response = await api.put<UserResponse>(`/users/${user.id}`, user);
        return response.data;

    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
}

export async function deleteUser(id: string): Promise<UserResponse> {
    const response = await api.delete<UserResponse>(`/${id}`);
    return response.data
}
/*// src/services/api.ts
import axios from 'axios';
import { config } from '../config/config';

const api = axios.create({  
    baseURL: config.apiUrl,
});

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};
*/

// src/api.ts
import { config } from '../config/config';

import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export async function fetchUsers() {
    const response = await api.get('/users');
    return response.data;
}

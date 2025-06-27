// src/config/index.ts
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    apiUrl: process.env.API_URL || 'http://localhost:3000/api/v1',
    env: process.env.APP_ENV || 'development',
    version: process.env.APP_VERSION || '1.0.0',
};


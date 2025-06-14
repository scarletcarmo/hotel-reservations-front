// src/config/index.ts

export const config = {
    apiUrl: process.env.API_URL || 'http://localhost:5000/api',
    env: process.env.APP_ENV,
    version: process.env.APP_VERSION,
};

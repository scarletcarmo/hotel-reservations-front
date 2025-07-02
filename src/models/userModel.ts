// src/models/user.ts
import { RoleModel } from './roleModels';

export interface UserModel {
    username: string;
    email: string;
    password: string;
    role_id: number;
    role: RoleModel;
}

export interface UserResponseData {
    id: number;
    username: string;
    email: string;
    role_id: number;
    role: RoleModel;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserResponse {
    code: number;
    status: string;
    message: string;
    data: UserResponseData | null;
}
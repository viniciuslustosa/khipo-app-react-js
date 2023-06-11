import { User } from 'user'

export type AccessToken = string;

export interface LoginPayload {
    email: User['email'];
    password: User['password'];
}

export interface LoginResponse {
    accessToken: AccessToken;
}

export interface RegisterPayload {
    firstName: User['firstName'],
    lastName: User['lastName'],
    email: User['email'];
    password: User['password'];
}
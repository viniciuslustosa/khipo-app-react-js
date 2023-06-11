import { LoginPayload, LoginResponse, RegisterPayload } from "../@types/auth";
import api from "../config/api";

export default class AuthService {
    static async signIn(credentials: LoginPayload) {
        try {
            const { data: authToken } = await api.post<LoginResponse>(
                'auth/login',
                credentials
            );
                
            return authToken;
        } catch (error) {
            console.log(error);
        }
    }

    static async signUp(credentials: RegisterPayload) {
        try {
            const { data: authToken } = await api.post<LoginResponse>(
                'auth/register',
                credentials
            );
                
            return authToken;
        } catch (error) {
            console.log(error);
        }
    }
}
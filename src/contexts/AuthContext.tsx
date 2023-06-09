import React, { createContext, useState, useEffect, useContext } from 'react';
import { User } from '../@types/user';

import api, { defaults } from '../config/api';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:accessToken');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  useEffect(() => {
    setSigned(Boolean(user))
  }, [user])

  async function Login(userData: Partial<User>) {
    try {
      const response = await api.post('admins/login', userData);
      setUser(response.data.user);
      
      defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
      
      localStorage.setItem('@App:user', JSON.stringify(response.data.user));
      localStorage.setItem('@App:accessToken', response.data.accessToken);
    } catch (error) {
      console.log(error)
    }
  }

  function Logout() {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:accessToken');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed, user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
import axios from 'axios';
import { FC, createContext, useState } from 'react';
import { USERS_PATH, USER_LOGIN_PATH } from '../../constants/url';
import { AuthContextType, IAuth } from '../../types/auth';

export const AuthContext = createContext<AuthContextType>(
  JSON.parse(localStorage.getItem('auth') || '{}')
);

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(
    JSON.parse(localStorage.getItem('auth') || '{}')
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        USER_LOGIN_PATH,
        { email, password },
        config
      );

      setAuth(data);
      localStorage.setItem('auth', JSON.stringify(data));
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const { data } = await axios.post(
        USERS_PATH,
        { name, email, password },
        config
      );

      setAuth(data);
      localStorage.setItem('auth', JSON.stringify(data));
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ auth, register, logout, login, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

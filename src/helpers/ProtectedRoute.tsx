import _ from 'lodash';
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

interface Props {
  children: JSX.Element;
  redirectTo: string;
}

export const ProtectedRoute = ({ children, redirectTo }: Props) => {
  const { auth, logout } = useContext(AuthContext);

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (!_.isEmpty(auth)) {
      const decodedJwt = parseJwt(auth.token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        logout();
      }
    }
  }, [auth, logout]);

  return !_.isEmpty(auth) ? children : <Navigate to={redirectTo} replace />;
};

import _ from 'lodash';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

interface Props {
  children: JSX.Element;
  redirectTo: string;
}

export const PublicRoute = ({ children, redirectTo }: Props) => {
  const { auth } = useContext(AuthContext);

  return _.isEmpty(auth) ? children : <Navigate to={redirectTo} replace />;
};

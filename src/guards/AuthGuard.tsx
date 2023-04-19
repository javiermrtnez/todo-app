import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Loading from '../components/Loading/Loading';

export const AuthenticatedRoute = () => {
  const { user } = useAuthContext();

  if (user === undefined) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to='/login' />;
};

export const UnauthenticatedRoute = () => {
  const { user } = useAuthContext();

  if (user === undefined) {
    return <Loading />;
  }

  return !user ? <Outlet /> : <Navigate to='/' />;
};

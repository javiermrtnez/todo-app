import { useNavigate } from 'react-router-dom';
import * as authService from '../services/auth.service';
import { notificationError, notificationSuccess } from '../utils/functions/notifications';

const useAuth = () => {
  const navigate = useNavigate();

  const signUpWithEmailAndPassword = (email: string, password: string): void => {
    authService
      .signUp(email, password)
      .then(() => {
        notificationSuccess('You have been logged in successfully!');
        navigate('/');
      })
      .catch((e) => {
        notificationError(
          'Oops! It looks like there was an error with your login. Please try again.'
        );
        console.log(e.message);
      });
  };

  const logInWithEmailAndPassword = (email: string, password: string): void => {
    authService
      .logIn(email, password)
      .then(() => {
        notificationSuccess('You have been logged in successfully!');
        navigate('/');
      })
      .catch((e) => {
        notificationError(
          'Oops! It looks like there was an error with your login. Please try again.'
        );
        console.log(e.message);
      });
  };

  const handleLogInGoogle = (): void => {
    authService
      .logInGoogle()
      .then(() => {
        notificationSuccess('You have been logged in successfully!');
        navigate('/');
      })
      .catch((e) => {
        notificationError(
          'Oops! It looks like there was an error with your login. Please try again.'
        );
        console.log(e.message);
      });
  };

  const handleLogInGitHub = (): void => {
    authService
      .logInGitHub()
      .then(() => {
        notificationSuccess('You have been logged in successfully!');
        navigate('/');
      })
      .catch((e) => {
        notificationError(
          'Oops! It looks like there was an error with your login. Please try again.'
        );
        console.log(e.message);
      });
  };

  return {
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    handleLogInGoogle,
    handleLogInGitHub,
  };
};

export default useAuth;

import { useNavigate } from 'react-router-dom';
import * as authService from '../services/auth.service';
import { notificationError, notificationSuccess } from '../utils/functions/notifications';
import { AdditionalUserInfo, UserCredential, getAdditionalUserInfo } from 'firebase/auth';
import useUser from './useUser';

const useAuth = () => {
  const navigate = useNavigate();
  const { createUser } = useUser();

  const saveNewUser = async (userCredential: UserCredential): Promise<void> => {
    const { isNewUser } = getAdditionalUserInfo(userCredential) as AdditionalUserInfo;

    if (isNewUser) {
      const { user } = userCredential;
      await createUser(user.uid, user.email);
    }
  };

  const signUpWithEmailAndPassword = (email: string, password: string): void => {
    authService
      .signUp(email, password)
      .then(async (userCredential) => {
        await createUser(userCredential.user.uid, userCredential.user.email);

        notificationSuccess('You have successfully signed up!');
        navigate('/');
      })
      .catch((e) => {
        notificationError(
          'Oops! It looks like there was an error with your sign up. Please try again.'
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
      .then(async (userCredential) => {
        await saveNewUser(userCredential);

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
      .then(async (userCredential) => {
        await saveNewUser(userCredential);

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

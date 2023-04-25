import { useNavigate } from 'react-router-dom';
import * as authService from '../services/auth.service';
import { notificationError, notificationSuccess } from '../utils/functions/notifications';
import { AdditionalUserInfo, UserCredential, getAdditionalUserInfo } from 'firebase/auth';
import useUser from './useUser';
import { useTranslation } from 'react-i18next';

const useAuth = () => {
  const { t } = useTranslation();
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

        notificationSuccess(t('notifications.successSignUp'));
        navigate('/');
      })
      .catch((e) => {
        notificationError(t('notifications.errorSignUp'));
        console.log(e.message);
      });
  };

  const logInWithEmailAndPassword = (email: string, password: string): void => {
    authService
      .logIn(email, password)
      .then(() => {
        notificationSuccess(t('notifications.successLogIn'));
        navigate('/');
      })
      .catch((e) => {
        notificationError(t('notifications.errorLogIn'));
        console.log(e.message);
      });
  };

  const handleLogInGoogle = (): void => {
    authService
      .logInGoogle()
      .then(async (userCredential) => {
        await saveNewUser(userCredential);

        notificationSuccess(t('notifications.successLogIn'));
        navigate('/');
      })
      .catch((e) => {
        notificationError(t('notifications.errorLogIn'));
        console.log(e.message);
      });
  };

  const handleLogInGitHub = (): void => {
    authService
      .logInGitHub()
      .then(async (userCredential) => {
        await saveNewUser(userCredential);

        notificationSuccess(t('notifications.successLogIn'));
        navigate('/');
      })
      .catch((e) => {
        notificationError(t('notifications.errorLogIn'));
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

import SCGoogleButton from './GoogleButton.style';
import useAuth from '../../hooks/useAuth';
import { GoogleIcon } from '../Icons/Icons';
import { useTranslation } from 'react-i18next';

const GoogleButton = () => {
  const { t } = useTranslation();
  const { handleLogInGoogle } = useAuth();

  return (
    <SCGoogleButton onClick={handleLogInGoogle}>
      <GoogleIcon />
      {t('logInProviders.continueWithGoogle')}
    </SCGoogleButton>
  );
};

export default GoogleButton;

import SCGoogleButton from './GoogleButton.style';
import useAuth from '../../hooks/useAuth';
import { GoogleIcon } from '../Icons/Icons';

const GoogleButton = () => {
  const { handleLogInGoogle } = useAuth();

  return (
    <SCGoogleButton onClick={handleLogInGoogle}>
      <GoogleIcon />
      Continue with Google
    </SCGoogleButton>
  );
};

export default GoogleButton;

import SCGoogleButton from './GoogleButton.style';
import google from '../../assets/icons/google.svg';
import useAuth from '../../hooks/useAuth';

const GoogleButton = () => {
  const { handleLogInGoogle } = useAuth();

  return (
    <SCGoogleButton onClick={handleLogInGoogle}>
      <img src={google} width={20} height={20} />
      Continue with Google
    </SCGoogleButton>
  );
};

export default GoogleButton;

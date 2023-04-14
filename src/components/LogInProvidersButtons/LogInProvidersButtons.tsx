import GitHubButton from '../GitHubButton/GitHubButton';
import GoogleButton from '../GoogleButton/GoogleButton';
import SCLogInProvidersButtons from './LogInProvidersButtons.style';

const LogInProvidersButtons = () => {
  return (
    <SCLogInProvidersButtons>
      <GoogleButton />
      <GitHubButton />
    </SCLogInProvidersButtons>
  );
};

export default LogInProvidersButtons;

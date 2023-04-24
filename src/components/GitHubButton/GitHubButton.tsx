import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';
import { GitHubIcon } from '../Icons/Icons';
import SCGitHubButton from './GitHubButton.style';

const GitHubButton = () => {
  const { t } = useTranslation();
  const { handleLogInGitHub } = useAuth();

  return (
    <SCGitHubButton onClick={handleLogInGitHub}>
      <GitHubIcon />
      {t('logInProviders.continueWithGitHub')}
    </SCGitHubButton>
  );
};

export default GitHubButton;

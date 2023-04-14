import useAuth from '../../hooks/useAuth';
import { GitHubIcon } from '../Icons/Icons';
import SCGitHubButton from './GitHubButton.style';

const GitHubButton = () => {
  const { handleLogInGitHub } = useAuth();

  return (
    <SCGitHubButton onClick={handleLogInGitHub}>
      <GitHubIcon />
      Continue with GitHub
    </SCGitHubButton>
  );
};

export default GitHubButton;

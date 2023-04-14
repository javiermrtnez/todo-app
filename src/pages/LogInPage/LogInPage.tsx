import SCLogInPage from './LogInPage.style';
import LogInProvidersButtons from '../../components/LogInProvidersButtons/LogInProvidersButtons';
import Input from '../../components/Input/Input';
import Separator from '../../components/Separator/Separator';
import useAuth from '../../hooks/useAuth';

const LogInPage = () => {
  const { logInWithEmailAndPassword } = useAuth();

  const handleLogInWithEmailAndPassword = (e) => {
    e.preventDefault();

    logInWithEmailAndPassword('javiermartinezbueno@gmail.com', 'RealJaen1998');
  };

  return (
    <SCLogInPage>
      <h1>Log into ToDo App</h1>

      <form onSubmit={handleLogInWithEmailAndPassword}>
        <Input label='Email' type='email' name='email' required autoFocus />

        <Input label='Password' type='password' name='password' required />

        <button type='submit'>Log in</button>
      </form>

      <Separator text={'or'} />

      <LogInProvidersButtons />
    </SCLogInPage>
  );
};

export default LogInPage;

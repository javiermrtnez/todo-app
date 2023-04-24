import SCLogInPage from './LogInPage.style';
import LogInProvidersButtons from '../../components/LogInProvidersButtons/LogInProvidersButtons';
import Input from '../../components/Input/Input';
import Separator from '../../components/Separator/Separator';
import useAuth from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';

const LogInPage = () => {
  const { t } = useTranslation();
  const { logInWithEmailAndPassword } = useAuth();

  const handleLogInWithEmailAndPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmailAndPassword(email, password);
  };

  return (
    <SCLogInPage>
      <h1>{t('logIn.title')}</h1>

      <form onSubmit={handleLogInWithEmailAndPassword}>
        <Input label={t('logInSignUpCommons.email')} type='email' name='email' required />

        <Input label={t('logInSignUpCommons.password')} type='password' name='password' required />

        <button type='submit'>{t('logIn.logIn')}</button>
      </form>

      <Separator text={t('logInSignUpCommons.or')} />

      <LogInProvidersButtons />
    </SCLogInPage>
  );
};

export default LogInPage;

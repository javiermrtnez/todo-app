import Input from '../../components/Input/Input';
import LogInProvidersButtons from '../../components/LogInProvidersButtons/LogInProvidersButtons';
import Separator from '../../components/Separator/Separator';
import useAuth from '../../hooks/useAuth';
import SCSignUpPage from './SignUpPage.style';
import { notificationError } from '../../utils/functions/notifications';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
  const { signUpWithEmailAndPassword } = useAuth();

  const handleSignUpWithEmailAndPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    // ToDo - Handle errors with React Hook Form
    if (password !== repeatPassword) {
      notificationError('Oops, the passwords you entered do not match. Please try again.');
      return;
    }

    signUpWithEmailAndPassword(email, password);
  };

  return (
    <SCSignUpPage>
      <h1>{t('signUp.title')}</h1>

      <form onSubmit={handleSignUpWithEmailAndPassword}>
        <Input label={t('logInSignUpCommons.email')} type='email' name='email' required />

        <Input
          label={t('logInSignUpCommons.password')}
          type='password'
          name='password'
          required
          minLength='6'
        />

        <Input
          label={t('signUp.repeatPassword')}
          type='password'
          name='repeatPassword'
          required
          minLength='6'
        />

        <button type='submit'>{t('signUp.createAccount')}</button>
      </form>

      <Separator text={t('logInSignUpCommons.or')} />

      <LogInProvidersButtons />
    </SCSignUpPage>
  );
};

export default SignUpPage;

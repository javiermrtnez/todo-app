import Input from '../../components/Input/Input';
import LogInProvidersButtons from '../../components/LogInProvidersButtons/LogInProvidersButtons';
import Separator from '../../components/Separator/Separator';
import useAuth from '../../hooks/useAuth';
import SCSignUpPage from './SignUpPage.style';
import { notificationError } from '../../utils/functions/notifications';

const SignUpPage = () => {
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
      <h1>Create your account</h1>

      <form onSubmit={handleSignUpWithEmailAndPassword}>
        <Input label='Email' type='email' name='email' required />

        <Input label='Password' type='password' name='password' required minLength='6' />

        <Input
          label='Repeat password'
          type='password'
          name='repeatPassword'
          required
          minLength='6'
        />

        <button type='submit'>Create account</button>
      </form>

      <Separator text={'or'} />

      <LogInProvidersButtons />
    </SCSignUpPage>
  );
};

export default SignUpPage;

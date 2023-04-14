import Input from '../../components/Input/Input';
import LogInProvidersButtons from '../../components/LogInProvidersButtons/LogInProvidersButtons';
import Separator from '../../components/Separator/Separator';
import useAuth from '../../hooks/useAuth';
import SCSignUpPage from './SignUpPage.style';

const SignUpPage = () => {
  const { signUpWithEmailAndPassword } = useAuth();

  const handleSignUpWithEmailAndPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signUpWithEmailAndPassword(email, password);
  };

  return (
    <SCSignUpPage>
      <h1>Create your account</h1>

      <form onSubmit={handleSignUpWithEmailAndPassword}>
        <Input label='Email' type='email' name='email' required autoFocus />

        <Input label='Password' type='password' name='password' required minlength='6' />

        <button type='submit'>Create account</button>
      </form>

      <Separator text={'or'} />

      <LogInProvidersButtons />
    </SCSignUpPage>
  );
};

export default SignUpPage;

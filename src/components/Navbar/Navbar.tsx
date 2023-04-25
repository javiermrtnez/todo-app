import { useAuthContext } from '../../context/AuthContext';
import { logOut } from '../../services/auth.service';
import SCNavbar from './Navbar.style';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();

    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <SCNavbar>
      <header className='app-header'>
        {/* <div style={{ display: 'flex', gap: '20px' }}> */}
        <Link className='logo-brand-container' to='/'>
          <div className='logo' />
          <h1 className='brand'>ToDoApp</h1>
        </Link>

        {/* {Boolean(user) && (
            <ul className='navbar-buttons'>
              <li>
                <Link className='navigation-button' to='/'>
                  My ToDos
                </Link>
              </li>
            </ul>
          )} */}
        {/* </div> */}

        <div className='navbar-buttons-toggle-theme-container'>
          {!user ? (
            <ul className='navbar-buttons'>
              <li>
                <Link className='navigation-button' to='/signup'>
                  {t('navbar.signUp')}
                </Link>
              </li>

              <li>
                <Link className='navigation-button white-black-button' to='/login'>
                  {t('navbar.logIn')}
                </Link>
              </li>
            </ul>
          ) : (
            <button className='navigation-button grey-white-button' onClick={handleSignOut}>
              {t('navbar.signOut')}
            </button>
          )}

          <div className='theme-language-buttons-container'>
            <ThemeToggleButton />
            <LanguageSelector />
          </div>
        </div>
      </header>
    </SCNavbar>
  );
};

export default Navbar;

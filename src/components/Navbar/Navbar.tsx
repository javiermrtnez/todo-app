import { useAuthContext } from '../../context/AuthContext';
import { logOut } from '../../services/auth.service';
import SCNavbar from './Navbar.style';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // const toggleMobileMenuOpen = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);

  //   document.body.style.position = !isMobileMenuOpen ? 'fixed' : '';
  // };

  console.log('document.body.style.position', document.body.style.position);

  return (
    <SCNavbar>
      <header className='app-header'>
        {/* <div style={{ display: 'flex', gap: '20px' }}> */}
        <Logo />

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

        <div className='desktop-navbar-container'>
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
        </div>

        {/* <div className='mobile-navbar-container'>
          <button onClick={toggleMobileMenuOpen} className='hamburguer-button'>
            <div className={`hamburguer-icon${isMobileMenuOpen ? ' mobile-menu-open' : ''}`} />
          </button>

          {isMobileMenuOpen && (
            <nav className='mobile-menu'>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
              <p>PRUEBA</p>
            </nav>
          )}
        </div> */}
      </header>
    </SCNavbar>
  );
};

export default Navbar;

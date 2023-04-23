import { useAuthContext } from '../../context/AuthContext';
import { logOut } from '../../services/auth.service';
import SCNavbar from './Navbar.style';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const Navbar = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();

    logOut()
      .then(() => {
        navigate('/');
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
                  Sign Up
                </Link>
              </li>

              <li>
                <Link className='navigation-button white-black-button' to='/login'>
                  Log in
                </Link>
              </li>
            </ul>
          ) : (
            <button className='navigation-button white-black-button' onClick={handleSignOut}>
              Sign out
            </button>
          )}

          <ThemeToggleButton />
        </div>
      </header>
    </SCNavbar>
  );
};

export default Navbar;

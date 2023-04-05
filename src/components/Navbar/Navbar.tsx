import { useAuth } from '../../context/AuthContext';
import SCNavbar from './Navbar.style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = useAuth();
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
        <Link className='logo-brand-container' to='/'>
          <div className='logo' />
          <h1 className='brand'>ToDoApp</h1>
        </Link>

        {/* <ul className='navbar-buttons'>
          <li>
            <Link className='navigation-button' to='/my-todo'>
              My To Do
            </Link>
          </li>
        </ul> */}

        {!user ? (
          <ul className='navbar-buttons'>
            <li>
              <Link className='navigation-button' to='/signup'>
                Sign Up
              </Link>
            </li>

            <li>
              <Link className='navigation-button' to='/login'>
                Log in
              </Link>
            </li>
          </ul>
        ) : (
          <button onClick={handleSignOut}>Sign out</button>
        )}
      </header>
    </SCNavbar>
  );
};

export default Navbar;

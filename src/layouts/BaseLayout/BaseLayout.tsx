import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useAuthContext } from '../../context/AuthContext';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import SCBaseLayout from './BaseLayout.style';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  const { user } = useAuthContext();

  return (
    <SCBaseLayout>
      {user === undefined ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />

          <div className='base-content'>
            <Outlet />
          </div>

          <Footer />
        </>
      )}
    </SCBaseLayout>
  );
};

export default BaseLayout;

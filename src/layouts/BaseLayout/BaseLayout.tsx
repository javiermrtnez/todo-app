import Navbar from '../../components/Navbar/Navbar';
import SCBaseLayout from './BaseLayout.style';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <SCBaseLayout>
      <Navbar />

      <div className='base-content'>
        <Outlet />
      </div>
    </SCBaseLayout>
  );
};

export default BaseLayout;

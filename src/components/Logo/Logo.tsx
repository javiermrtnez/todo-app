import SCLogo from './Logo.style';

const Logo = ({ showBrand = true }) => {
  return (
    <SCLogo to='/'>
      <div className='logo' />
      {showBrand && <h1 className='brand'>ToDoApp</h1>}
    </SCLogo>
  );
};

export default Logo;

import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Logo from '../Logo/Logo';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import SCFooter from './Footer.style';

const Footer = () => {
  return (
    <SCFooter>
      <div className='logo-theme-language-container'>
        <Logo />

        <div className='theme-language-buttons-container'>
          <ThemeToggleButton />
          <LanguageSelector />
        </div>
      </div>
    </SCFooter>
  );
};

export default Footer;

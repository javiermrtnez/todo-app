import { useTheme } from '../../context/ThemeContext';
import { THEMES } from '../../utils/constants/themes';
import SCHeader from './Header.style';
import iconMoon from '../../assets/icons/icon-moon.svg';
import iconSun from '../../assets/icons/icon-sun.svg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SCHeader>
      <h1>TO-DO</h1>

      <button onClick={toggleTheme}>
        <img src={theme === THEMES.light ? iconMoon : iconSun}></img>
      </button>
    </SCHeader>
  );
};

export default Header;

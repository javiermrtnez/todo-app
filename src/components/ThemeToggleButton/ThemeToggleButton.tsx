import { useTheme } from '../../context/ThemeContext';
import SCThemeToggleButton from './ThemeToggleButton.style';
import { THEMES } from '../../utils/constants/themes';
import { MoonIcon, SunIcon } from '../Icons/Icons';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SCThemeToggleButton onClick={toggleTheme}>
      {theme === THEMES.light ? <MoonIcon /> : <SunIcon />}
    </SCThemeToggleButton>
  );
};

export default ThemeToggleButton;

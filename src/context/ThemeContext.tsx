import { useState, useEffect, createContext } from 'react';

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () => {
    theme === THEMES.light ? setTheme(THEMES.dark) : setTheme(THEMES.light);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

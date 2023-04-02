import { useState, useEffect, createContext } from 'react';

export const THEMES = {
  light: 'light-theme',
  dark: 'dark-theme',
};

export const ThemeContext = createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.dark
      : THEMES.light;

  const [theme, setTheme] = useState(getSystemTheme());

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

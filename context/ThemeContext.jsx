// context/ThemeContext.js
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const setDarkModeValue = (value) => {
    setDarkMode(value);
    localStorage.setItem("theme", value ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, setDarkModeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Get theme from localStorage or default to false (light mode)
    try {
      const saved = localStorage.getItem('theme');
      return saved ? JSON.parse(saved) : false;
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      return false;
    }
  });

  useEffect(() => {
    // Save theme preference to localStorage whenever it changes
    try {
      localStorage.setItem('theme', JSON.stringify(isDark));
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};


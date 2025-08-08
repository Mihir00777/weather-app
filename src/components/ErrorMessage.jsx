import React from 'react';
import { useTheme } from './ThemeProvider';

const ErrorMessage = ({ message }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`p-4 rounded-xl text-center mb-4 ${
      isDark 
        ? 'bg-red-900/30 border border-red-700/50 text-red-300' 
        : 'bg-red-500/20 border border-red-400/50 text-red-100'
    }`}>
      {message}
    </div>
  );
};

export default ErrorMessage;
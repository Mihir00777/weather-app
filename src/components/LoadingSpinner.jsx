import React from 'react';
import { useTheme } from './ThemeProvider';

const LoadingSpinner = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex justify-center items-center py-8">
      <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
        isDark ? 'border-blue-400' : 'border-white'
      }`}></div>
    </div>
  );
};

export default LoadingSpinner;
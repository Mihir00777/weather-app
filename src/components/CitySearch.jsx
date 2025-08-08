import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const { isDark } = useTheme();

  const handleSubmit = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className={`backdrop-blur-md rounded-2xl p-4 border shadow-lg ${
        isDark 
          ? 'bg-gray-800/80 border-gray-600/50' 
          : 'bg-white/20 border-white/30'
      }`}>
        <div className="flex justify-center">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city..."
            className={`flex-1 px-4 py-3 rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition-all ${
              isDark 
                ? 'bg-gray-700/90 text-white' 
                : 'bg-white/90 text-gray-800'
            }`}
          />
          <button
            onClick={handleSubmit}
            className={`px-6 py-3 rounded-r-xl transition-all duration-200 flex items-center justify-center min-w-[60px] ${
              isDark 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitySearch;
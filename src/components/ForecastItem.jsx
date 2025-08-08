import React from 'react';
import { useTheme } from './ThemeProvider';
import WeatherIcon from './WeatherIcon';

const ForecastItem = ({ day, index }) => {
  const { isDark } = useTheme();
  
  return (
    <div
      className={`backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer border h-full ${
        isDark 
          ? 'bg-gray-800/40 hover:bg-gray-700/60 border-gray-600/30' 
          : 'bg-white/15 hover:bg-white/25 border-white/20'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`font-semibold mb-3 text-base md:text-lg ${
        isDark ? 'text-gray-200' : 'text-white/90'
      }`}>
        {new Date(day.dt_txt).toLocaleDateString()}
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mb-4">
        <WeatherIcon 
          IconComponent={day?.weather[0].icon} 
        />
      </div>
      <div className={`mb-3 ${isDark ? 'text-white' : 'text-white'}`}>
        <div className="text-xl md:text-2xl font-bold">{day?.main?.temp}°</div>
        <div className={`text-sm ${
          isDark ? 'text-gray-400' : 'text-white/70'
        }`}>{day?.main?.temp_min}°</div>
      </div>
      <div className={`backdrop-blur-sm px-2 py-1 rounded-full ${
        isDark 
          ? 'bg-gray-700/60' 
          : 'bg-white/20'
      }`}>
        <span className={`text-xs md:text-sm capitalize ${
          isDark ? 'text-gray-200' : 'text-white/90'
        }`}>
          {day?.weather[0].description}
        </span>
      </div>
    </div>
  );
};

export default ForecastItem;
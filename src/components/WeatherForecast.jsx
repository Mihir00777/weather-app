import React from 'react';
import { useTheme } from './ThemeProvider';
import ForecastItem from './ForecastItem';

const WeatherForecast = ({ forecastData }) => {
  const { isDark } = useTheme();
  const daily = forecastData.filter((f, i) => i % 8 === 0);
  return (
    <div className={`backdrop-blur-md rounded-3xl p-6 md:p-8 border shadow-2xl ${
      isDark 
        ? 'bg-gray-800/80 border-gray-600/50' 
        : 'bg-white/20 border-white/30'
    }`}>
      <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
        isDark ? 'text-white' : 'text-white'
      }`}>
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        {daily.map((day, index) => (
          <ForecastItem key={index} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
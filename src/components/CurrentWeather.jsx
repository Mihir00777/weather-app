import React from 'react';
import { Wind, Droplets, Eye, Gauge } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import WeatherIcon from './WeatherIcon';

const WeatherDetail = ({ icon: IconComponent, label, value, iconColor }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/50 hover:bg-gray-700/60' 
        : 'bg-white/10 hover:bg-white/20'
    }`}>
      <IconComponent className={`w-8 h-8 mx-auto mb-2 ${iconColor}`} />
      <div className={`text-sm mb-1 ${
        isDark ? 'text-gray-300' : 'text-white/80'
      }`}>{label}</div>
      <div className={`text-xl font-semibold ${
        isDark ? 'text-white' : 'text-white'
      }`}>{value}</div>
    </div>
  );
};

const CurrentWeather = ({ weatherData }) => {
  const { isDark } = useTheme();
  
  if (!weatherData) return null;

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const weatherDetails = [
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${weatherData.main.humidity}%`,
      iconColor: isDark ? 'text-blue-300' : 'text-blue-200'
    },
    {
      icon: Wind,
      label: 'Wind',
      value: `${weatherData.wind.speed} km/h`,
      iconColor: isDark ? 'text-gray-300' : 'text-gray-200'
    },
    {
      icon: Gauge,
      label: 'Pressure',
      value: `${weatherData.main.pressure} hPa`,
      iconColor: isDark ? 'text-yellow-300' : 'text-yellow-200'
    },
    {
      icon: Eye,
      label: 'Visibility',
      value: `${weatherData.visibility} km`,
      iconColor: isDark ? 'text-green-300' : 'text-green-200'
    }
  ];

  return (
    <div className={`backdrop-blur-md rounded-3xl p-8 mb-8 border shadow-2xl transform transition-all duration-500 ${
      isDark 
        ? 'bg-gray-800/80 border-gray-600/50' 
        : 'bg-white/20 border-white/30'
    }`}>
      <div className="text-center mb-6">
        <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
          isDark ? 'text-white' : 'text-white'
        }`}>{weatherData.name}</h2>
        <p className={`text-base md:text-lg ${
          isDark ? 'text-gray-300' : 'text-white/80'
        }`}>{getCurrentDate()}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
            <WeatherIcon 
              IconComponent={weatherData.weather[0].icon} 
            />
            <div className="text-center sm:text-left">
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-white'
              }`}>
                {weatherData.main.temp}°
              </div>
              <div className={`text-lg md:text-xl capitalize ${
                isDark ? 'text-gray-200' : 'text-white/90'
              }`}>
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>
          <div className={`inline-block backdrop-blur-sm px-4 py-2 rounded-full ${
            isDark 
              ? 'bg-gray-700/60' 
              : 'bg-white/20'
          }`}>
            <span className={`text-sm md:text-base ${
              isDark ? 'text-gray-200' : 'text-white/90'
            }`}>
              Feels like {weatherData.main.feels_like}°
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 w-full lg:w-auto lg:min-w-[300px]">
          {weatherDetails.map((detail, index) => (
            <WeatherDetail
              key={index}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
              iconColor={detail.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
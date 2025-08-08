import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../services/weatherService';

import CitySearch from '../components/CitySearch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import CurrentWeather from '../components/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../components/ThemeProvider';

const WeatherApp = () => {
  const { isDark } = useTheme();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const weatherRes = await fetchCurrentWeather(city);
      const forecastRes = await fetchForecast(city);
      setWeather(weatherRes.data);
      setForecast(forecastRes.data.list);
    } catch (err) {
      setError('City not found or API error.');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData('Vadodara');
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 p-4 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white'
    }`}>
      <ThemeToggle />
      <div className="max-w-4xl mx-auto pt-16">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${
          isDark ? 'text-white' : 'text-white'
        }`}>
          Weather App 🌤️
        </h1>
        <CitySearch onSearch={fetchWeatherData} />
        
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && <CurrentWeather weatherData={weather} />}
        {forecast.length > 0 && <WeatherForecast forecastData={forecast} />}
      </div>
    </div>
  );
};

export default WeatherApp;
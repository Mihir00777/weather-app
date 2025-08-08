import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../services/weatherService';
import CitySearch from '../components/CitySearch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import CurrentWeather from '../components/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast';
import '../styles/index.css'

const WeatherApp = () => {
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
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App 🌤️</h1>
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

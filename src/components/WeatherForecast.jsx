import React from 'react';
import ForecastItem from './ForecastItem';

const WeatherForecast = ({ forecastData }) => {
  const daily = forecastData.filter((f, i) => i % 8 === 0);
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl animate-fade-in">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full lg:w-auto lg:min-w-[300px]">
      {daily.map((day, index) => <ForecastItem key={index} day={day} />)}
    </div>
    </div>
  );
};

export default WeatherForecast;

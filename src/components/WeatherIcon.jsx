import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

const WeatherIcon = ({ IconComponent }) => {
  const getIcon = (iconCode) => {
    switch(iconCode) {
      case '01d': case '01n': return Sun;
      case '02d': case '02n': case '03d': case '03n': case '04d': case '04n': return Cloud;
      case '09d': case '09n': case '10d': case '10n': return CloudRain;
      case '13d': case '13n': return Snowflake;
      default: return Sun;
    }
  };
  
  const Icon = getIcon(IconComponent);
  return <Icon className="w-16 h-16 text-yellow-400" />;
};

export default WeatherIcon;
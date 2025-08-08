
import { Wind, Droplets, Eye, Gauge } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
const WeatherDetail = ({ icon: IconComponent, label, value, iconColor = "text-white" }) => (
  <div className="bg-white/10 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
    <IconComponent className={`w-8 h-8 mx-auto mb-2 ${iconColor}`} />
    <div className="text-sm text-white/80">{label}</div>
    <div className="text-xl font-semibold text-white">{value}</div>
  </div>
);

const CurrentWeather = ({ weatherData }) => {
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
      iconColor: 'text-blue-200'
    },
    {
      icon: Wind,
      label: 'Wind',
      value: `${weatherData.wind.speed} km/h`,
      iconColor: 'text-gray-200'
    },
    {
      icon: Gauge,
      label: 'Pressure',
      value: `${weatherData.main.pressure} hPa`,
      iconColor: 'text-yellow-200'
    },
    {
      icon: Eye,
      label: 'Visibility',
      value: `${weatherData.visibility} km`,
      iconColor: 'text-green-200'
    }
  ];

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl transform transition-all duration-500 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{weatherData.name}</h2>
        <p className="text-white/80 text-base md:text-lg">{getCurrentDate()}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
            <WeatherIcon 
              IconComponent={weatherData.weather[0].icon} 
            />
            <div className="text-center sm:text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {weatherData.main.temp}°
              </div>
              <div className="text-lg md:text-xl text-white/90">
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"><span className="text-white/90 text-sm md:text-base">Feels like {weatherData.main.feels_like}°</span>
            
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

export default CurrentWeather
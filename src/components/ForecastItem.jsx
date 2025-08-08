import WeatherIcon from './WeatherIcon';

const ForecastItem = ({ day, key }) => {
    return(
    <div
    className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 h-full"
    style={{ animationDelay: `${key * 100}ms` }}
  >
    <div className="text-white/90 font-semibold mb-3 text-base md:text-lg">{new Date(day.dt_txt).toLocaleDateString()}</div>
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
      <WeatherIcon 
        IconComponent={day?.weather[0].icon} 
      />
    </div>
    <div className="text-white mb-3">
      <div className="text-xl md:text-2xl font-bold">{day?.main?.temp}°</div>
      <div className="text-sm text-white/70">{day?.main?.temp_min}°</div>
    </div>
    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
      <span className="text-white/90 text-xs md:text-sm">{day?.weather[0].description}</span>
    </div>
  </div>
)};

export default ForecastItem;



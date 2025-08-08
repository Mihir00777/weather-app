const WeatherIcon = ({ IconComponent}) => {
  return(
<img src={`https://openweathermap.org/img/wn/${IconComponent}@2x.png`} alt="icon" />
)}


export default WeatherIcon;

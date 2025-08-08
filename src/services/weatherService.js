import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = "54ebd87996610a8c963b2d04b5a42eb4";

export const fetchCurrentWeather = (city) =>
  axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

export const fetchForecast = (city) =>
  axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);

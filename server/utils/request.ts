import axios from "axios";

export const requestWeather = async (lat: string, lon: string) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const { data } = await axios(requestUrl);

  return data;
};

export const requestAirPollution = async (lat: string, lon: string) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const requestUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const { data } = await axios(requestUrl);

  return data;
};

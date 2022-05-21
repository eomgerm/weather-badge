import axios from "axios";

export default async function handler(req, res) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const {
    query: { city },
  } = req;
  const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${API_KEY}`;
  const { data } = await axios(requestUrl);
  res.status(200).send(data);
}

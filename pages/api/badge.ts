import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import IconSVGMap from "../../utils/iconSvgMap";

const API_KEY = process.env.WEATHER_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { lat, lon, size = "100" },
  } = req;

  const requestWeather = async () => {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const { data } = await axios(requestUrl);

    return data;
  };

  const { weather: weatherArr } = await requestWeather();
  const weather = weatherArr[0];
  const weatherSvgUri = IconSVGMap[weather.icon];

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=3600, max-age=3600");
  res.end(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 320 320">
  <image href="${weatherSvgUri}" height="200" width="200"/>
</svg>`);
};

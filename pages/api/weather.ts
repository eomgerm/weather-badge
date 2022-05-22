import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { lat, lon },
  } = req;

  console.log(lat, lon);

  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const { data } = await axios(requestUrl);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

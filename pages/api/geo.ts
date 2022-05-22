import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { city },
  } = req;
  const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${API_KEY}`;

  try {
    const { data } = await axios(requestUrl);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}
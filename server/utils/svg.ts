import axios from "axios";
import IconSVGMap from "../../utils/iconSvgMap";

export const createBadge = async (lat: string, lon: string, size: string): Promise<string> => {
  const { weather: weatherArr, main } = await requestWeather(lat, lon);
  const weather = weatherArr[0];
  const weatherSvgUri = IconSVGMap[weather.icon];
  const height: number = Number(size) * 1.3;

  return `<!DOCTYPE svg PUBLIC
        "-//W3C//DTD SVG 1.1//EN"
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg height="${height}" width="${size}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve">
    <style type="text/css"><![CDATA[
            
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
text {
    fill: #005B3A;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.8em;
}

text.weather {
    font-weight: 700;
}

text.temp {
    font-size: 0.7em
}

    ]]></style>
  <image href="${weatherSvgUri}" height="${+size + 50}" width="${+size + 50}"/>
  <text x="50" y="90" class="weather" text-anchor="middle">${weather.main}</text>
  <image x="10" y="98" href="/temperature-half-solid.svg" height="15" width="15" />
  <text x="25" y="110" class="temp">${main.temp}℃</text>
</svg>`;
};

const requestWeather = async (lat: string, lon: string) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const { data } = await axios(requestUrl);

  return data;
};

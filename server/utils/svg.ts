import axios from "axios";
import IconSVGMap from "../../utils/iconSvgMap";

export const createBadge = async (lat: string, lon: string, size: string): Promise<string> => {
  const { weather: weatherArr, main, wind, name } = await requestWeather(lat, lon);
  const weather = weatherArr[0];

  const temp = main.temp.toFixed(1);

  const weatherSvgUri = IconSVGMap[weather.icon];
  const height = Number(size) * 1.3;

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

text.location {
    fill: grey;
}

text.weather {
    font-weight: 700;
    font-size: 1.3em;
}

text.description {
    font-size: 0.7em
}

    ]]></style>
    <svg x="5" y="5">
    <svg  xmlns="http://www.w3.org/2000/svg" fill="grey" width="12" height="12" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
    <text x="14" y="11" class="location" >${name}</text>
    </svg>
  <image href="${weatherSvgUri}" height="${size}" width="${size}" y="-10"/>
  <text x="75" y="132" class="weather" text-anchor="middle">${weather.main}</text>
  <svg x="15" y="145" >
  <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/></svg>  
  <text x="16" y="12" class="description">${temp}℃</text>
  </svg>
  <svg x="15" y="165">
  <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"/></svg>
<text x="16" y="12" class="description">${wind.speed} m/s</text>
  </svg>
</svg>`;
};

const requestWeather = async (lat: string, lon: string) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const { data } = await axios(requestUrl);

  return data;
};

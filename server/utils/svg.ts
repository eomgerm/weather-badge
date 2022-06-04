import IconSVGMap from "../../utils/iconSvgMap";
import { requestAirPollution, requestWeather } from "./request";

type AqiMap = {
  [key: number]: string;
};

export const createBadge = async (lat: string, lon: string, size: string): Promise<string> => {
  const height = Number(size) * 1.3;
  const badgeScale = Number(size) / 150;

  const { weather: weatherArr, main, wind, name, dt, timezone } = await requestWeather(lat, lon);
  const { list: airPollutionArr } = await requestAirPollution(lat, lon);
  const weather = weatherArr[0];
  const airPollution = airPollutionArr[0];
  const {
    main: { aqi },
  } = airPollution;

  const aqiMap: AqiMap = {
    1: "Best",
    2: "Good",
    3: "Fair",
    4: "Poor",
    5: "Worst",
  };

  const aqiText = aqiMap[aqi];
  const temp = main.temp.toFixed(1);
  const feelsLike = main.feels_like.toFixed(1);
  const windSpeed = wind.speed.toFixed(1);
  const cityName = name.length > 10 ? `${name.slice(0, 10)}...` : name;

  const { svg, scale, y } = IconSVGMap[weather.icon];
  const iconSize = Number(size) * scale;

  const currentTime = new Date((dt + timezone) * 1000);
  let hours = currentTime.getHours().toString();
  hours = hours.length == 1 ? `0${hours}` : hours;
  let minutes = currentTime.getMinutes().toString();
  minutes = minutes.length == 1 ? `0${minutes}` : minutes;
  const timeText = `${hours}:${minutes} UTC${timezone > 0 ? "+" : "-"}${Math.abs(timezone / 3600)}`;

  //TODO: svg 사이즈 변경 가능하게 하기

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

text.header {
    fill: #bababa;
    font-size: ${0.6 * badgeScale}em;
}

text.weather {
    font-weight: 700;
    font-size: ${1.3 * badgeScale}em;
}

text.description {
    font-size: ${0.7 * badgeScale}em
}

    ]]></style>
    <rect height="${height}" width="${size}" stroke="#cccccc" fill="white" rx="${5 * badgeScale}" ry="${5 * badgeScale}" />
    <svg x="${8 * badgeScale}" y="${8 * badgeScale}">
    <svg  xmlns="http://www.w3.org/2000/svg" fill="#bababa" width="${10 * badgeScale}" height="${
    10 * badgeScale
  }" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
    <text x="${11 * badgeScale}" y="${8 * badgeScale}" class="header" >${cityName}</text>
    <text x="${132 * badgeScale}" y="${9 * badgeScale}" class="header" text-anchor="end">${timeText}</text>
    </svg>
    <svg x="${(+size * (1 - scale)) / 2}" y="${y * badgeScale}" width="${iconSize}" height="${iconSize}">
    ${svg}
    </svg>
  <text x="${75 * badgeScale}" y="${130 * badgeScale}" class="weather" text-anchor="middle">${weather.main}</text>
  <svg y="${145 * badgeScale}">
  <svg x="${15 * badgeScale}" >
  <svg xmlns="http://www.w3.org/2000/svg" fill="#005B3A" height="${15 * badgeScale}" width="${
    15 * badgeScale
  }" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/></svg>
  <text x="${16 * badgeScale}" y="${10 * badgeScale}" class="description">${temp}℃</text>
  </svg>
  <svg x="${15 * badgeScale}" y="${21 * badgeScale}">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#005B3A" height="${13 * badgeScale}" width="${
    13 * badgeScale
  }" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"/></svg>
<text x="${16 * badgeScale}" y="${10 * badgeScale}" class="description">${windSpeed} m/s</text>
  </svg>
    <svg x="${85 * badgeScale}">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#005B3A" height="${13 * badgeScale}" width="${
    13 * badgeScale
  }" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
  <text x="${16 * badgeScale}" y="${10 * badgeScale}" class="description">${feelsLike}℃</text>
  </svg>
    <svg x="${85 * badgeScale}" y="${21 * badgeScale}">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#005B3A" height="${13 * badgeScale}" width="${
    13 * badgeScale
  }" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 288h156.1C322.6 307.8 351.8 320 384 320s61.25-12.25 83.88-32H528C589.9 288 640 237.9 640 176s-50.13-112-112-112c-18 0-34.75 4.625-49.75 12.12C453.1 30.1 406.8 0 352 0c-41 0-77.75 17.25-104 44.75C221.8 17.25 185 0 144 0c-79.5 0-144 64.5-144 144S64.5 288 144 288zM136 464H23.1C10.8 464 0 474.8 0 487.1S10.8 512 23.1 512H136C149.2 512 160 501.2 160 488S149.2 464 136 464zM616 368h-528C74.8 368 64 378.8 64 391.1S74.8 416 87.1 416h528c13.2 0 24-10.8 24-23.1S629.2 368 616 368zM552 464H231.1C218.8 464 208 474.8 208 487.1S218.8 512 231.1 512H552c13.2 0 24-10.8 24-23.1S565.2 464 552 464z"/></svg>
  <text x="${16 * badgeScale}" y="${10 * badgeScale}" class="description">${aqiText}</text>
  </svg>
  </svg>
</svg>`;
};

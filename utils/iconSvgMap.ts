type IconSVGMap = {
  [key: string]: { uri: string; scale: number; y: number };
};

const IconSVGMap: IconSVGMap = {
  "11d": { uri: "/animated/thunder.svg", scale: 0.8, y: 5 },
  "09d": { uri: "/animated/rainy-6.svg", scale: 0.8, y: 0 },
  "10d": { uri: "/animated/rainy-3.svg", scale: 0.8, y: 5 },
  "13d": { uri: "/animated/snowy-5.svg", scale: 0.8, y: 0 },
  "50d": { uri: "/animated/cloudy.svg", scale: 0.9, y: 5 },
  "01d": { uri: "/animated/day.svg", scale: 1.0, y: -10 },
  "01n": { uri: "/animated/night.svg", scale: 1.0, y: -10 },
  "02d": { uri: "/animated/cloudy-day-1.svg", scale: 0.9, y: 5 },
  "02n": { uri: "/animated/cloudy-night-1.svg", scale: 0.9, y: 5 },
  "03d": { uri: "/animated/cloudy-day-2.svg", scale: 0.9, y: 5 },
  "03n": { uri: "/animated/cloudy-night-2.svg", scale: 0.9, y: 5 },
  "04d": { uri: "/animated/cloudy-day-3.svg", scale: 0.9, y: 5 },
  "04n": { uri: "/animated/cloudy-night-3.svg", scale: 0.9, y: 5 },
};

export default IconSVGMap;

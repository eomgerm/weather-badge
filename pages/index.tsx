import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCity, faCloudSunRain, faEnvelope, faFaceMeh, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [city, setCity] = useState<string>("");
  const [recommendations, setRecommendations] = useState<Array<City>>([]);
  const [chosenCity, setChosenCity] = useState<City>({ name: "Seoul", state: "", country: "KR", lat: 37.5666791, lon: 126.9782914 });

  interface City {
    name: string;
    state: string;
    country: string;
    lat: number;
    lon: number;
  }

  const handleChagneCity = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setCity(value);
  };

  useEffect(() => {
    const getCityRecommendations = async () => {
      const { data } = await axios(`/api/weather?city=${city}`);
      const cities = data.map((city: any) => ({ name: city.name, country: city.country, lat: city.lat, lon: city.lon }));
      setRecommendations(cities);
      console.log(cities);
    };
    getCityRecommendations();
  }, [city]);

  return (
    <div className="min-h-screen flex-col flex">
      <header className="flex flex-col items-center justify-center pt-6">
        <FontAwesomeIcon icon={faCloudSunRain} size="3x" style={{ color: "005B3A" }} />
        <h1 className="text-4xl font-bold mt-2">
          Weather <span className="text-[#A499C6]">Badge</span>
        </h1>
        <p className="mt-2">
          Create your own <span className="text-[#A499C6]">Badge</span> showing current weather.
        </p>
      </header>

      <main className="rounded-lg flex-col gap-y-8 mt-5 container grow flex items-center">
        <div style={{ width: 200, height: 200 }}>
          <img src="/vercel.svg" />
        </div>

        <form className="flex flex-col w-[20rem] gap-y-2">
          <label className="label">City Name</label>
          <div className="relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute top-3.5 left-3.5" />
            <input
              type="text"
              placeholder="Where do you live?"
              className="py-3 pl-11 pr-5 rounded-full w-full focus:outline-0 focus:ring-4 focus: ring-[#A499C6]/50"
              onChange={handleChagneCity}
              name="city"
            />
          </div>
        </form>

        {city ? (
          recommendations.length > 0 ? (
            <div className="bg-white rounded-md flex flex-col w-[20rem] h-[15.25rem] items-center overflow-y-auto">
              <ul className="w-full divide-y">
                {recommendations.map((city) => (
                  <li className="cursor-pointer hover:bg-gray-200" onClick={() => setChosenCity(city)}>
                    <div className="flex place-content-between px-5 py-3">
                      <p className="font-semibold">{city.name}</p>
                      <span className="text-xs text-slate-400 mt-1 text-right">{city.country}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-white rounded-md flex flex-col w-[20rem] h-[15.25rem] justify-center items-center">
              <FontAwesomeIcon icon={faFaceMeh} style={{ color: "005B3A" }} size="3x" />
              <span className="mt-3 text-md font-semibold">Could not find {city}...</span>
            </div>
          )
        ) : (
          <div className="bg-white rounded-md flex flex-col w-[20rem] h-[15.25rem] items-center justify-center">
            <FontAwesomeIcon icon={faCity} style={{ color: "005B3A" }} size="3x" />
            <span className="mt-3 text-md font-semibold">You have to enter the city name.</span>
          </div>
        )}

        <button className="mb-5 bg-gradient-to-tr from-[#f650a0] to-[#ff8787] rounded-full py-3 w-56 text-[#FFE4F6] font-bold hover:bg-none hover:bg-[#ff8787]">
          Copy!
        </button>
      </main>

      <footer className="flex justify-center py-3 border-t border-[#A499C6]">
        <div className="flex justify-center items-center container">
          <div>
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/eomgerm" target="_blank" className="hover:underline">
              Eomgerm
            </a>
          </div>
          <div className="flex gap-x-4 items-center ml-auto">
            <a href="https://github.com/eomgerm/weather-badge" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "005B3A" }} />
            </a>
            <a href="https://velog.io/@eomgerm" target="_blank">
              <img src="/velog.svg" width={30} />
            </a>
            <a href="mailto:fishbread00@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "005B3A" }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

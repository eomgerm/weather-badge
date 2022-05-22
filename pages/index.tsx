import { faCity, faCloudSunRain, faEnvelope, faFaceMeh, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import CityInput from "../components/CityInput";
import CopyButton from "../components/CopyButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

  const handleChangeCity = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setCity(value);
  };

  useEffect(() => {
    const getCityRecommendations = async () => {
      const { data } = await axios(`/api/geo?city=${city}`);
      const cities = data.map((city: any) => ({ name: city.name, country: city.country, lat: city.lat, lon: city.lon }));
      setRecommendations(cities);
    };
    if (city) {
      getCityRecommendations();
    }
  }, [city]);

  useEffect(() => {
    const getWeather = async () => {
      const { lat, lon } = chosenCity;
      const { data } = await axios(`/api/weather?lat=${lat}&lon=${lon}`);
      console.log(data);
    };
    getWeather();
  }, [chosenCity]);

  return (
    <div className="min-h-screen flex-col flex">
      <Header />

      <main className="rounded-lg flex-col gap-y-8 mt-5 container grow flex items-center">
        <div style={{ width: 200, height: 200 }}>
          <img src="/vercel.svg" />
        </div>

        <CityInput onChange={handleChangeCity} />

        {city ? (
          recommendations.length > 0 ? (
            <div className="bg-white rounded-md flex flex-col w-[20rem] h-[15.25rem] items-center overflow-y-auto">
              <ul className="w-full divide-y">
                {recommendations.map((city, index) => (
                  <li key={index} className="cursor-pointer hover:bg-gray-200" onClick={() => setChosenCity(city)}>
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

        <CopyButton />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

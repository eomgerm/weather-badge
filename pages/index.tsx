import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import CityAutoComplete from "../components/CityAutoComplete";
import CityInput from "../components/CityInput";
import CopyButton from "../components/CopyButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { City } from "../types/types";

const Home: NextPage = () => {
  const [city, setCity] = useState<string>("");
  const [chosenCity, setChosenCity] = useState<City>({ name: "Seoul", state: "", country: "KR", lat: 37.5666791, lon: 126.9782914 });

  const handleChangeCity = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setCity(value);
  };

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

        <CityAutoComplete input={city} setChosenCity={setChosenCity} />

        <CopyButton />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

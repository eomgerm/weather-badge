import type { NextPage } from "next";
import React, { useState } from "react";
import CityAutoComplete from "../components/CityAutoComplete";
import CityInput from "../components/CityInput";
import CopyButton from "../components/CopyButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SizeInput from "../components/SizeInput";
import useDebounce from "../hooks/useDebounce";
import { City } from "../types/types";
import generateQueryString from "../utils/generateQueryString";
import CopyModal from "../components/CopyModal";

const Home: NextPage = () => {
  const [city, setCity] = useState<string>("");
  const [chosenCity, setChosenCity] = useState<City>({ name: "Seoul", state: "", country: "KR", lat: 37.5666791, lon: 126.9782914 });
  const [size, setSize] = useState<string>("");

  const handleCityChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setCity(value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setSize(value);
  };

  const queryString = useDebounce({ value: generateQueryString({ lat: chosenCity.lat, lon: chosenCity.lon, size }), delay: 300 });
  const svgUrl = `/api/badge${queryString}`;

  return (
    <div className="min-h-screen flex-col flex">
      <Header />

      <main className="rounded-lg flex-col container grow flex items-center">
        <a href={svgUrl} className="my-3">
          <object data={svgUrl} className="pointer-events-none" />
        </a>
        <div className="flex flex-col gap-y-6 items-center">
          <form className="flex flex-col w-[20rem] gap-y-2">
            <CityInput onChange={handleCityChange} />
            <SizeInput onChange={handleSizeChange} />
          </form>
          <CityAutoComplete input={city} setChosenCity={setChosenCity} />

          <CopyButton />
        </div>

        <CopyModal badgeUrl={svgUrl} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

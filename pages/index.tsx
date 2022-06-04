import type { NextPage } from "next";
import React, { useState } from "react";
import CityInput from "../components/CityInput";
import CopyButton from "../components/CopyButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SizeInput from "../components/SizeInput";
import useDebounce from "../hooks/useDebounce";
import { City } from "../types/types";
import generateQueryString from "../utils/generateQueryString";
import CopyModal from "../components/CopyModal";
import Head from "next/head";
import { useJsApiLoader } from "@react-google-maps/api";
import Maps from "../components/Maps";

const Home: NextPage = () => {
  const [chosenCity, setChosenCity] = useState<City>({ name: "Seoul", state: "", country: "KR", lat: 37.5666791, lon: 126.9782914 });
  const [size, setSize] = useState<string>("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

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
      <Head>
        <title>🌦️ - Weather Badge</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Create your own Badge showing current weather." />
      </Head>
      <Header />

      <main className="rounded-lg flex-col container grow flex items-center">
        <a href={svgUrl} className="my-3">
          <img src={svgUrl} alt="Weather Badge" />
        </a>
        <div className="flex flex-col gap-y-6 items-center relative z-0">
          <form className="w-[20rem]">
            <CityInput setChosenCity={setChosenCity} />
            <SizeInput onChange={handleSizeChange} />
          </form>

          {isLoaded ? <Maps lat={chosenCity.lat} lng={chosenCity.lon} /> : <div>Loading...</div>}
          <CopyButton />
        </div>

        <CopyModal badgeUrl={svgUrl} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

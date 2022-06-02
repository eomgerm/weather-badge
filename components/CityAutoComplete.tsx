import { NextPage } from "next";
import { City } from "../types/types";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CityList from "./CityList";
import useDebounce from "../hooks/useDebounce";
import useOnClickOutside from "../hooks/useOnClickOutside";

type CityAutoCompleteProps = {
  input: string;
  setChosenCity: (city: City) => void;
  isOpen: boolean;
  setIsAutocompleteOpen: (isAutocompleteOpen: boolean) => void;
};

const CityAutoComplete: NextPage<CityAutoCompleteProps> = ({ input, setChosenCity, setIsAutocompleteOpen, isOpen }: CityAutoCompleteProps) => {
  const [recommendations, setRecommendations] = useState<Array<City>>([]);

  const debouncedInput = useDebounce({ value: input, delay: 200 });

  const autocompleteRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(autocompleteRef, () => setIsAutocompleteOpen(false));

  useEffect(() => {
    const getCityRecommendations = async () => {
      const { data } = await axios(`/api/geo?city=${debouncedInput}}`);
      const cities = data.map((city: any) => ({ name: city.name, country: city.country, lat: city.lat, lon: city.lon }));
      setRecommendations(cities);
    };

    debouncedInput ? getCityRecommendations() : setRecommendations([]);
  }, [debouncedInput]);

  useEffect(() => {
    setIsAutocompleteOpen(recommendations.length > 0);
  }, [recommendations.length]);

  return (
    <div
      ref={autocompleteRef}
      className="bg-white rounded-b-md flex flex-col w-[20rem] justify-center items-center overflow-y-auto z-10 fixed drop-shadow-md"
    >
      {isOpen && <CityList setIsAutocompleteOpen={setIsAutocompleteOpen} setChosenCity={setChosenCity} recommendations={recommendations} />}
    </div>
  );
};

export default CityAutoComplete;

import { NextPage } from "next";
import { City } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import CityList from "./CityList";
import NotFoundCity from "./NotFoundCity";
import BadInput from "./BadInput";
import useDebounce from "../hooks/useDebounce";

type Props = {
  input: string;
  setChosenCity: (city: City) => void;
};

const CityAutoComplete: NextPage<Props> = ({ input, setChosenCity }: Props) => {
  const [recommendations, setRecommendations] = useState<Array<City>>([]);

  const debouncedInput = useDebounce({ value: input, delay: 300 });

  useEffect(() => {
    const getCityRecommendations = async () => {
      const { data } = await axios(`/api/geo?city=${debouncedInput}}`);
      const cities = data.map((city: any) => ({ name: city.name, country: city.country, lat: city.lat, lon: city.lon }));
      setRecommendations(cities);
    };

    if (debouncedInput) {
      getCityRecommendations();
    } else {
      setRecommendations([]);
    }

    return () => {
      setRecommendations([]);
    };
  }, [debouncedInput]);

  return (
    <div className="bg-white rounded-md flex flex-col w-[20rem] h-[15.25rem] justify-center items-center overflow-y-auto">
      {debouncedInput ? (
        recommendations.length > 0 ? (
          <CityList setChosenCity={setChosenCity} recommendations={recommendations} />
        ) : (
          <NotFoundCity input={debouncedInput} />
        )
      ) : (
        <BadInput />
      )}
    </div>
  );
};

export default CityAutoComplete;

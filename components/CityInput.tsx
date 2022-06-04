import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CityAutoComplete from "./CityAutoComplete";
import { useEffect, useState } from "react";
import { City } from "../types/types";

type CityInputProps = {
  setChosenCity: (city: City) => void;
};

const CityInput: NextPage<CityInputProps> = ({ setChosenCity }: CityInputProps) => {
  const [city, setCity] = useState<string>("");
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState<boolean>(false);
  const [recommendationsExists, setRecommendationsExists] = useState<boolean>(false);
  const [isFoucsed, setIsFoucsed] = useState<boolean>(false);

  const handleCityChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setCity(value);
  };

  const handleInputFocus = () => {
    setIsFoucsed(true);
    setIsAutocompleteOpen(recommendationsExists);
  };

  const handleInputBlur = () => {
    setIsFoucsed(false);
  };

  useEffect(() => {
    setIsAutocompleteOpen(recommendationsExists);
  }, [recommendationsExists]);

  return (
    <>
      <label>City Name</label>
      <div className={`relative mt-2 ${isFoucsed && "drop-shadow-md"}`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute top-3.5 left-4" />
        <input
          type="text"
          placeholder="Seoul (Default)"
          className={`py-3 pl-11 pr-5 w-full focus:outline-0 ${!isAutocompleteOpen ? "rounded-full" : "rounded-t-3xl"}`}
          onChange={handleCityChange}
          name="city"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <CityAutoComplete
        input={city}
        isOpen={isAutocompleteOpen}
        setChosenCity={setChosenCity}
        setIsAutocompleteOpen={setIsAutocompleteOpen}
        setRecommendationsExists={setRecommendationsExists}
      />
    </>
  );
};

export default CityInput;

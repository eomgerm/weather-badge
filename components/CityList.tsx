import { NextPage } from "next";
import { City } from "../types/types";
import CityListItem from "./CityListItem";

type CityListProps = {
  recommendations: Array<City>;
  setChosenCity: (city: City) => void;
  setIsAutocompleteOpen: (open: boolean) => void;
};

const CityList: NextPage<CityListProps> = ({ recommendations, setChosenCity, setIsAutocompleteOpen }: CityListProps) => {
  return (
    <div className="h-full w-full">
      <ul className="w-full divide-y">
        {recommendations.map((city) => (
          <CityListItem key={city.lat + city.lon} city={city} setChosenCity={setChosenCity} setIsAutocompleteOpen={setIsAutocompleteOpen} />
        ))}
      </ul>
    </div>
  );
};

export default CityList;

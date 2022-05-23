import { NextPage } from "next";
import { City } from "../types/types";
import CityListItem from "./CityListItem";

type CityListProps = {
  recommendations: Array<City>;
  setChosenCity: (city: City) => void;
};

const CityList: NextPage<CityListProps> = ({ recommendations, setChosenCity }: CityListProps) => {
  return (
    <div className="h-full w-full">
      <ul className="w-full divide-y">
        {recommendations.map((city, index) => (
          <CityListItem city={city} index={index} setChosenCity={setChosenCity} />
        ))}
      </ul>
    </div>
  );
};

export default CityList;

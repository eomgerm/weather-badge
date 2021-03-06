import { NextPage } from "next";
import { City } from "../types/types";

type CityListItemProps = {
  city: City;
  setChosenCity: (city: City) => void;
  setIsAutocompleteOpen: (open: boolean) => void;
};

const CityListItem: NextPage<CityListItemProps> = ({ city, setChosenCity, setIsAutocompleteOpen }: CityListItemProps) => {
  const hanldeClickItem = () => {
    setChosenCity(city);
    setIsAutocompleteOpen(false);
  };

  return (
    <li className="cursor-pointer hover:bg-gray-200" onClick={hanldeClickItem}>
      <div className="flex place-content-between px-5 py-3">
        <p className="font-semibold">{city.name}</p>
        <span className="text-xs text-slate-400 mt-1 text-right">{city.country}</span>
      </div>
    </li>
  );
};

export default CityListItem;

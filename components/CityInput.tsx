import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type CityInputProps = {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const CityInput: NextPage<CityInputProps> = ({ onChange }: CityInputProps) => {
  return (
    <form className="flex flex-col w-[20rem] gap-y-2">
      <label className="label">City Name</label>
      <div className="relative">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute top-3.5 left-3.5" />
        <input
          type="text"
          placeholder="Where do you live?"
          className="py-3 pl-11 pr-5 rounded-full w-full focus:outline-0 focus:ring-4 focus: ring-[#A499C6]/50"
          onChange={onChange}
          name="city"
        />
      </div>
    </form>
  );
};

export default CityInput;

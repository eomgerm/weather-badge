import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

const BadInput: NextPage = () => {
  return (
    <div className="flex flex-col">
      <FontAwesomeIcon icon={faCity} style={{ color: "005B3A" }} size="3x" />
      <span className="mt-3 text-md font-semibold">You have to enter the city name.</span>
    </div>
  );
};

export default BadInput;

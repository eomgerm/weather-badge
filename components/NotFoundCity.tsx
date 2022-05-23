import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";

type NotFoundCityProps = {
  input: string;
};

const NotFoundCity: NextPage<NotFoundCityProps> = ({ input }: NotFoundCityProps) => {
  return (
    <div className="flex flex-col">
      <FontAwesomeIcon icon={faFaceMeh} style={{ color: "005B3A" }} size="3x" />
      <span className="mt-3 text-md font-semibold">Could not find {input}...</span>
    </div>
  );
};

export default NotFoundCity;

import { NextPage } from "next";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: NextPage = () => {
  return (
    <header className="flex flex-col items-center justify-center p-2">
      <h1 className="text-4xl font-bold mt-2">
        Weather <span className="text-[#A499C6]">Badge</span>
      </h1>
      <p className="mt-2">
        Create your own <span className="text-[#A499C6]">Badge</span> showing current weather.
      </p>
    </header>
  );
};

export default Header;

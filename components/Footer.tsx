import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <footer className="flex justify-center py-3 border-t border-[#A499C6]">
      <div className="flex justify-center items-center container">
        <div>
          © {new Date().getFullYear()}{" "}
          <a href="https://github.com/eomgerm" target="_blank" rel="noopener" className="hover:underline">
            Eomgerm
          </a>
        </div>
        <div className="flex gap-x-4 items-center ml-auto">
          <a href="https://github.com/eomgerm/weather-badge" target="_blank" rel="noopener">
            {/*@ts-ignore*/}
            <FontAwesomeIcon icon={faGithub} size="xl" style={{ color: "005B3A" }} />
          </a>
          <a href="https://velog.io/@eomgerm" target="_blank" rel="noopener" className="h-[25px]">
            <Image src="/velog.svg" width={25} height={25} alt="velog" />
          </a>
          <a href="mailto:fishbread00@gmail.com">
            {/*@ts-ignore*/}
            <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "005B3A" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

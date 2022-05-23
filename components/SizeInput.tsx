import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

type SizeInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SizeInput: NextPage<SizeInputProps> = ({ onChange }: SizeInputProps) => {
  return (
    <>
      <label className="label">Size</label>
      <div className="relative">
        <FontAwesomeIcon icon={faMaximize} size="lg" className="absolute top-3.5 left-4" />
        <input
          type="number"
          placeholder="100 (Default)"
          className="py-3 pl-11 pr-5 rounded-full w-full focus:outline-0 focus:ring-4 focus: ring-[#A499C6]/50"
          name="size"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SizeInput;

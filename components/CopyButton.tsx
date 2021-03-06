import { NextPage } from "next";

const CopyButton: NextPage = () => {
  return (
    <label
      className="text-center cursor-pointer mb-5 bg-gradient-to-tr from-[#f650a0] to-[#ff8787] rounded-full py-3 w-56 text-[#FFE4F6] font-bold hover:bg-none hover:bg-[#ff8787] focus:outline-none focus:bg-[#ff8787]"
      htmlFor="copy-modal"
    >
      Copy!
    </label>
  );
};

export default CopyButton;

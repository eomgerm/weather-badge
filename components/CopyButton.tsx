import { NextPage } from "next";

type CopyButtonProps = {
  onClick: () => void;
};

const CopyButton: NextPage<CopyButtonProps> = ({ onClick }: CopyButtonProps) => {
  return (
    <label
      onClick={onClick}
      className="text-center cursor-pointer mb-5 bg-gradient-to-tr from-[#f650a0] to-[#ff8787] rounded-full py-3 w-56 text-[#FFE4F6] font-bold hover:bg-none hover:bg-[#ff8787] focus:outline-none focus:bg-[#ff8787]"
      htmlFor="copy-modal"
    >
      Copy!
    </label>
  );
};

export default CopyButton;

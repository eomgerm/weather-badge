import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useState } from "react";

type CodeMockupProps = {
  contents: string;
};

const CodeMockup: NextPage<CodeMockupProps> = ({ contents }: CodeMockupProps) => {
  const [copyText, setCopyText] = useState<string>("Copy");

  const handleClick = async () => {
    await navigator.clipboard.writeText(contents);
    setCopyText("Copied!");
  };

  const handleMouseOut = () => {
    if (copyText != "Copy") {
      setTimeout(() => {
        setCopyText("Copy");
      }, 200);
    }
  };

  return (
    <>
      <div className="mockup-code before:hidden flex relative">
        <pre>
          <code>{contents}</code>
        </pre>
        <div className="fixed right-10 tooltip tooltip-info" data-tip={copyText} onClick={handleClick} onMouseOut={handleMouseOut}>
          <FontAwesomeIcon icon={faCopy} className="opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default CodeMockup;

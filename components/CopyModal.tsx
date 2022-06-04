import { NextPage } from "next";
import CodeMockup from "./CodeMockup";

type CopyModalProps = {
  badgeUrl: string;
};

const CopyModal: NextPage<CopyModalProps> = ({ badgeUrl }: CopyModalProps) => {
  return (
    <>
      <input type="checkbox" id="copy-modal" className="modal-toggle" />
      <label htmlFor="copy-modal" className="modal cursor-pointer">
        <label className="flex flex-col modal-box gap-y-2">
          <label htmlFor="copy-modal" className="text-[#bababa] text-xl absolute right-4 top-2 cursor-pointer">
            ✕
          </label>
          <h3 className="text-lg font-bold">SVG URL</h3>
          <CodeMockup contents={"https://weather-badge.vercel.app" + badgeUrl} />
          <h3 className="text-lg font-bold">HTML</h3>
          <CodeMockup contents={`<a href=${"https://weather-badge.vercel.app" + badgeUrl}>\n   <object data=${badgeUrl} />\n  </a>`} />
          <h3 className="text-lg font-bold">Markdown</h3>
          <CodeMockup contents={`[![Weather Badge](${"https://weather-badge.vercel.app" + badgeUrl})]("https://weather-badge.vercel.app/")`} />
        </label>
      </label>
    </>
  );
};

export default CopyModal;

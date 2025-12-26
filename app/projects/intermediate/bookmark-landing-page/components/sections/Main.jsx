"use client";
import { useCommonText } from "../../hooks/useCommonText";
import Card from "../ui/Card";

export default function Main() {
  return (
    <div>
      <Content />
      <Cards />
    </div>
  );
}

function Content() {
  const { titleStyles, textStyles } = useCommonText();
  return (
    <div className="max-w-[541px] mx-auto text-center">
      <h2 className={titleStyles}>Download the extension</h2>
      <p className={textStyles}>
        We&apos;ve got more browsers in the pipeline. Please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize.
      </p>
    </div>
  );
}
function Cards() {
  return (
    <div className="max-w-[904px] mx-auto">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

import Image from "next/image";
import { illustrationStayProductive } from "../imageIndex";

export default function Productivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
      <Illustration />
      <Content />
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative w-[326px] h-[245px] sm:w-[614px] sm:h-[464px]">
      <Image
        alt="people being productive"
        className="object-contain"
        fill
        src={illustrationStayProductive}
      />
    </div>
  );
}
function Content() {
  return (
    <div className="">
      <h2 className="preset-3-bold sm:preset-1 sm:text-3xl mb-4 sm:mb-6 lg:mb-8">
        Stay productive, wherever you are
      </h2>
      <p className="mb-4 preset-8 sm:preset-7-regular">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="mb-4 sm:mb-6 preset-8 sm:preset-7-regular">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      {/* 
            See how Fylo works */}
    </div>
  );
}

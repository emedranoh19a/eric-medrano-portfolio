import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import {
  imgGraphicDesign,
  imgPhotography,
  imgStandOut,
  imgTransform,
} from "../imageIndex";

export default function Features() {
  return (
    <section id="features">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ItemSet
          title="Transform your brand"
          content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          img={imgTransform}
          imgAlt="Egg"
          imgClassName="lg:col-start-2 lg:row-start-1"
          contentClassName=""
          buttonVariant="yellow"
        />
        <ItemSet
          title="Stand out to the right audience"
          content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          img={imgStandOut}
          imgAlt="Pink cup"
          imgClassName=""
          contentClassName=""
          buttonVariant="red"
        />
        <ItemSingle
          title="Graphic design"
          content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          img={imgGraphicDesign}
          imgAlt=""
          titleClassName="text-green-800"
          contentClassName="text-green-600"
        />
        <ItemSingle
          title="Photography"
          content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          img={imgPhotography}
          imgAlt=""
          titleClassName="text-blue-950"
          contentClassName="text-blue-800"
        />
      </div>
    </section>
  );
}

function ItemSet({
  title,
  content,
  img,
  imgAlt,
  imgClassName,
  contentClassName,
  buttonVariant,
}) {
  const imgItemStyles = clsx(
    "h-[312px] sm:h-[600px] w-full relative",
    imgClassName
  );
  const contentItemStyles = clsx(
    " mx-auto self-center p-6 text-center flex flex-col items-center gap-6 py-[67.5px] sm:gap-8 sm:max-w-[451px] lg:max-w-[445px] lg:text-left lg:items-start",
    contentClassName
  );
  return (
    <>
      <div className={imgItemStyles}>
        <Image
          src={img.desktop}
          alt={imgAlt}
          fill
          className="object-cover hidden lg:block"
        />
        <Image
          src={img.mobile}
          alt={imgAlt}
          fill
          className="object-cover block lg:hidden"
        />
      </div>
      <div className={contentItemStyles}>
        <h2 className="preset-4 sm:preset-3 text-grey-900">{title}</h2>
        <p className="preset-10 text-grey-550 lg:mb-2">{content}</p>
        <Button variant={buttonVariant} text="learn more" className="w-fit" />
      </div>
    </>
  );
}

function ItemSingle({
  title,
  content,
  img,
  imgAlt,
  titleClassName,
  contentClassName,
}) {
  const containerStyles = clsx(
    "relative px-[18px] py-14 h-[600px]",
    "",
    "flex flex-col justify-end gap-8"
  );
  const titleStyles = clsx("preset-5 mb-8", titleClassName);
  const contentStyles = clsx("preset-11", contentClassName);
  return (
    <div className={containerStyles}>
      <Image
        src={img.desktop}
        alt={imgAlt}
        fill
        className="object-cover -z-10 absolute"
      />
      <div className=" sm:max-w-[339px] mx-auto text-center">
        <h2 className={titleStyles}>{title}</h2>
        <p className={contentStyles}>{content}</p>
      </div>
    </div>
  );
}

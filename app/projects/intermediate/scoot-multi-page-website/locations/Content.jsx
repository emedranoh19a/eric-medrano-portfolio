import Button from "../components/Button";

export default function Content() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-10 lg:gap-0 lg:flex-row text-center lg:text-left mb-18 md:mb-30">
      <h2 className="preset-2 text-dark-navy capitalize lg:max-w-[351px] ">
        Your city not listed?
      </h2>
      <p className="preset-body text-dim-grey max-w-[573px] lg:max-w-[445px] lg:ml-[30px]">
        {" "}
        If you&apos;d like to see Scoot in your hometown, be sure to let us
        know. We track requests and plan launches based on demand. Feel free to
        message us by clicking the link or messaging us on social.
      </p>
      <Button text="Message Us" className="lg:ml-auto" />
    </section>
  );
}

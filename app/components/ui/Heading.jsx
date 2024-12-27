export default function Heading({ text, catchphrase }) {
  //CatchPrase will be just a decoration in the background

  return (
    <h2 className="text-6xl indent-6 tracking-widest leading-10 text-neutral-600 antialiased">
      {text}
    </h2>
  );
}

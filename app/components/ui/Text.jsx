export default function Text({ children }) {
  //Set a good typography in the layout.
  return (
    <p className="text-3xl indent-6 tracking-widest leading-10 text-neutral-600 antialiased">
      {children}
    </p>
  );
}

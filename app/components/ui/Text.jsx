export default function Text({ children, className = "" }) {
  //Set a good typography in the layout.
  return (
    <p className="mt-[.5rem] text-[1.4rem] text-neutral-700 block indent-6 text-left">
      {children}
    </p>
  );
}

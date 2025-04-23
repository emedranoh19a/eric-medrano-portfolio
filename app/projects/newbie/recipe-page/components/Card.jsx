export default function Card({ children }) {
  return (
    <div className="mx-auto md:rounded-xl bg-[var(--white)] p-0 flex flex-col md:p-4 max-w-md ">
      {children}
    </div>
  );
}

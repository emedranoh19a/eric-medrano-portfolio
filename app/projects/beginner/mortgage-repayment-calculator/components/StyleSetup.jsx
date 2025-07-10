export default function StyleSetup({ children }) {
  return (
    <div
      className="w-full bg-[var(--slate-100)] min-h-screen grid place-items-center sm:p-10"
      style={{
        "--lime": "#D8DB2F",
        "--red": "#d73328",
        "--slate-900": "#133041",
        "--slate-700": "#4e6e7e",
        "--slate-500": "#8b94a8",
        "--slate-300": "#9abed5",
        "--slate-100": "#e4f4fd",
        //tailwind white
        //slate: 100, 300, 500, 700, 900
      }}
    >
      {children}
    </div>
  );
}

export default function StylesSetup({ children }) {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden flex flex-col bg-(--white)"
      style={{
        "--cyan-600": "#4d95a9",
        "--cyan-300": "#8fe3f9",
        "--purple-600": "#855fb1",
        "--purple-300": "#d9b8ff",
        "--slate-900": "#28283d",
        "--slate-600": "#87879d",
        "--slate-300": "#d1d1df",
        "--white": "#fafafa",
      }}
    >
      {children}
    </div>
  );
}

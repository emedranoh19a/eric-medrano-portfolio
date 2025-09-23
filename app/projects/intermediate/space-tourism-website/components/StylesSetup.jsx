export default function StylesSetup({ children }) {
  return (
    <div
      style={{
        //colors
        "--blue-900": "#0B0D17",
        "--blue-300": "#D0D6F9",
        "--white": "#ffffff",
      }}
      className="bg-(--blue-900)"
    >
      {children}
    </div>
  );
}

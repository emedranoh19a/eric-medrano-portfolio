export default function StyleSetup({ children }) {
  return (
    <div
      className="w-full min-h-screen relative z-0"
      style={{
        "--red-500": "#F15D51",
        "--gold-400": "#E9AA52",
        "--navy-600": "#5E607A",
        "--navy-950": "#00001A",
        "--grey-200": "#D8D8D8",
        "--grey-300": "#C5C6CE",
      }}
    >
      {children}
    </div>
  );
}

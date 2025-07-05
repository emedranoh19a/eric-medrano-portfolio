export default function StyleSetup({ children }) {
  return (
    <div
      className="w-full min-h-screen bg-[var(--green-200)] px-4 py-8 grid place-items-center"
      style={{
        "--grey-900": "#2A4144",
        "--grey-500": "#86A2A5",
        "--green-600": "#0C7D69",
        "--green-200": "#E0F1E8",
        "--red": "#D73C3C",
      }}
    >
      {children}
    </div>
  );
}

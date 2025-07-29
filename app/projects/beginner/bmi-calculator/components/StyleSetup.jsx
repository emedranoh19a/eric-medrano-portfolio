export default function StyleSetup({ children }) {
  return (
    <div
      className="w-full min-h-screen bg-white overflow-x-hidden"
      style={{
        "--grey-500": "#5E6E85",
        "--grey-300": "#ACC1DE",
        "--blue-900": "#253347",
        "--blue-500": "#345FF6",
        "--blue-300": "#B3D3F1",
        "--blue-100": "#E1E7FE",
        "--gradient-start": "#d6fcfe",
        "--gradient-start-transparent": "rgba(214, 252, 254, 0)",
        "--gradient-end": "#d6e6fe",
      }}
    >
      {children}
    </div>
  );
}

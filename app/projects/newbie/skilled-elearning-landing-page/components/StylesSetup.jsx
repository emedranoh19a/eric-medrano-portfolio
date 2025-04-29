export default function StylesSetup({ children }) {
  return (
    <div
      className="w-full relative bg-white min-h-screen"
      style={{
        "--blue-900": "#13183F",
        "--blue-600": "#666CA3",
        "--pink-600": "#F74780",
        "--pink-300": "#FFA7C3",
        "--grey": "#83869A",
        "--gradient-pink-top": "#F02AA6",
        "--gradient-pink-bottom": "#FF6F48",
        "--gradient-purple-bottom": "#4851FF",
        "--gradient-purple-top": "#F02AA6",
      }}
    >
      {children}
    </div>
  );
}

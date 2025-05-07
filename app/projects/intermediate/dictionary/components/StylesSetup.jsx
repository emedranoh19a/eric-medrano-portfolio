export default function StylesSetup({ children }) {
  return (
    <main
      className="min-h-screen w-full"
      style={{
        "--neutral-950": "#050505",
        "--neutral-900": "#1F1F1F",
        "--neutral-800": "#2D2D2D",
        "--neutral-700": "#3A3A3A",
        "--neutral-300": "#757575",
        "--neutral-200": "#E9E9E9",
        "--neutral-100": "#F4F4F4",
        "--primary": "#A445ED",
        "--error": "#FF5252",
      }}
    >
      {children}
    </main>
  );
}

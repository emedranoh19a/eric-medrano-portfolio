export default function StyleSetup({ children }) {
  return (
    <div
      style={{
        "--black": "#1C232B",
        "--grey": "#6C7289",
        "--cream": "#F2EAE2",
        "--green-500": "#3D8168",
        "--green-700": "#144032",
      }}
      className="w-full min-h-screen grid place-items-center bg-(--cream)"
    >
      {children}
    </div>
  );
}

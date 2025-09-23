export default function StylesSetup({ children }) {
  return (
    <div
      className="w-full min-h-screen h-fit bg-(--purple-100)"
      style={{
        "--green": "#44ffa1",
        "--purple-900": "#24053e",
        "--purple-500": "#584d62",
        "--purple-100": "#fcf8ff",
        "--white": "#ffffff",
      }}
    >
      {children}
    </div>
  );
}

export default function StyleSetup({ children }) {
  //TODO: Typography setup
  //TODO: imageIndex.
  //TODO: Components.
  //TODO: Mobile markup
  //TODO: Tablet markup
  //TODO: Desktop markup
  //TODO: Functionality: ...others (Conditionals, Motion, Forms, Fetchers, etc...)
  //TODO: Set font from NextJS: Inconsolata: Bold, extrabold, medium and regular.
  return (
    <div
      className="w-full min-h-screen z-0 relative"
      style={{
        "--gray-950": "#2f2f2f",
        "--gray-400": "#adb5be",
        "--gray-200": "#dfdee0",
        "--purple-950": "#21092f",
        "--purple-500": "#d53aff",
        "--orange-400": "#ff934a",
        "--blue-400": "#47a2ff",
        "--red-400": "#ff5050",
        "--gradient-white-start": "#ffffff",
        "--gradient-white-end": "#d2d3d9",
        "--gradient-purple-start": "#6348fe",
        "--gradient-purple-end": "#610595",
      }}
    >
      {children}
    </div>
  );
}

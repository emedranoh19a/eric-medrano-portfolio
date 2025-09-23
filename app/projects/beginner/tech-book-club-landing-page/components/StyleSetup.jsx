export default function StyleSetup({ children }) {
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden relative z-0 bg-(--neutral-0) flex flex-col gap-16 sm:gap-20 lg:gap-28"
      style={{
        "--neutral-900": "#062630",
        "--neutral-700": "#385159",
        "--neutral-200": "#E6E1DF",
        "--neutral-100": "#FAF5F3",
        "--neutral-0": "#ffffff",
        "--light-salmon-500": "#FEA36F",
        "--light-salmon-100": "#FFE2D1",
        "--light-salmon-50": "#FFF5EF",
        "--text-gradient-start": "#FF9A60",
        "--text-gradient-stop": "#062630",
        //Note: Bg gradient are salmon 100~50
        // "--text-gradient":
        //   "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        // "--gradient": "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      }}
    >
      {children}
    </div>
  );
}

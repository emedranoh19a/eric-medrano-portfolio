export default function StylesSetup({ children }) {
  return (
    <div
      style={{
        "--white": "hsl(0, 0%, 100%)", //card background
        "--stone-100": "hsl(30, 54%, 90%)", //background
        "--stone-150": "hsl(30, 18%, 87%)", //horizontal lines
        "--stone-600": "hsl(30, 10%, 34%)", //normal text
        "--stone-900": "hsl(24, 5%, 18%)", //main title
        "--brown-800": "hsl(14, 45%, 36%)", //title
        "--rose-50": "hsl(330, 100%, 98%)", //preparation time bg
        "--rose-800": "hsl(332, 51%, 32%)", //preparation time title
      }}
      className="w-full lg:pb-60 md:py-20 min-h-screen bg-(--stone-100)"
    >
      {children}
    </div>
  );
}

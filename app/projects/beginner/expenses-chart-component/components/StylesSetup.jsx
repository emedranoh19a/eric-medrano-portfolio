import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function StylesSetup({ children }) {
  return (
    <div
      style={{
        "--soft-red": "hsl(10, 79%, 65%)",
        "--cyan": "hsl(186, 34%, 60%)",
        "--dark-brown": "hsl(25, 47%, 15%)",
        "--medium-brown": "hsl(28, 10%, 53%)",
        "--cream": "hsl(27, 66%, 92%)",
        "--very-pale-orange": "hsl(33, 100%, 98%)",
      }}
      className={`bg-[var(--cream)] w-full min-h-screen grid place-items-center ${dmSans.className}`}
    >
      {children}
    </div>
  );
}

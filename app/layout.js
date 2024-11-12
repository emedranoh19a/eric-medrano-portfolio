import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "./components/layout/Navbar/Navbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-32`}
      >
        <NavbarDemo />
            <main className="max-h-screen max-w-screen overflow-hidden ">{children}</main>

      </body>
    </html>
  );
}

import localFont from "next/font/local"
import CustomNavbar from "./components/layout/OriginalNavbar/CustomNavbar"
import { navbarItems } from "./components/layout/OriginalNavbar/NavbarItems"
import { SmoothCursor } from "./components/layout/SmoothCursor"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

// export const metadata = {
//   title: "Eric Medrano",
//   description: "",
// }

export async function generateMetadata() {
  return {
    title: "Eric Medrano | Web Developer in progress",
    description: "Discover Eric Medrano's portfolio showcasing projects built with Next.js, TailwindCSS, and Framer Motion. From sleek designs to functional applications, see how he brings ideas to life on the web.",
    icons: {
      icon: [
        { url: '/favicon/favicon.png' },
      ],
    },
    openGraph: {
      title: "Eric Medrano | Web Developer in progress",
      images: ["/Logo.png"],
      // icon: "/favicon/favicon.png",
      icons: {
        icon: [
          { url: '/favicon/favicon.png' },
        ],
      },
      description: "Discover Eric Medrano's portfolio showcasing projects built with Next.js, TailwindCSS, and Framer Motion. From sleek designs to functional applications, see how he brings ideas to life on the web.",
      type: "website",
      url: "https://eric-medrano-portfolio.netlify.app/"
    },
    robots: {
      index: true,
      follow: true,
    },

  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      {/* <Head>
        <link rel="icon" href="/favicon/favicon.png" />
        </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <SmoothCursor />
        <main className="relative max-w-screen min-h-screen h-fit overflow-x-hidden z-0">
          {/* <NavbarDemo /> */}
          {/* <SidebarDemo > */}
          <CustomNavbar navItems={navbarItems} />
          <div className="min-h-screen w-full relative -z-10">

            {children}
          </div>
          {/* </SidebarDemo> */}
        </main>
      </body>
    </html >
  )
}

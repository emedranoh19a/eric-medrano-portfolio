import localFont from "next/font/local"
import { SidebarDemo } from "./components/layout/Sidebar/SidebarDemo"
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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  //TODO: Move the "SidebarDemo" here, and erase the file.



  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main>

          {/* <NavbarDemo /> */}
          {/* <main className="min-h-screen max-w-screen overflow-hidden ">
          <SidebarDemo />
          {children}</main> */}
          {/* <div className={containerStyles}> */}
          <SidebarDemo />
          {/* </div> */}
          {/* Hello! I'm Eric. a programmer. */}


          {/* Estructura de mi portafolio
        Home: Un Hero.
        Lo que puedo hacer con las computadoras. (Skills Globe.)
        Mi trabajo:
        Un contact form.
        
        */}
        </main>
      </body>
    </html>
  )
}

//TODO:  Organize the styles for:
//TODO:mobile sidebar
//TODO:sidebasidebarbodyr
//TODO:sidebarlink
//TODO:sidebarlogo
//TODO:sidebardemo
//TODO: Sidebar debería ocupar toda la pantalla

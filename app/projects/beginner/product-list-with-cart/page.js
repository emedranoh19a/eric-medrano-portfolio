"use client"
import { Red_Hat_Text } from "next/font/google"
import Cart from "./components/Cart"
import DessertCatalogue from "./components/DessertCatalogue"
import CartContextProvider from "./hooks/CartContextProvider"
const redHatText = Red_Hat_Text({ subsets: ["latin"] })


// Users should be able to:

// - Add items to the cart and remove them
// - Increase/decrease the number of items in the cart
// - See an order confirmation modal when they click "Confirm Order"
// - Reset their selections when they click "Start New Order"
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

export default function Page() {


    return <StyleTokensSetup>
        <CartContextProvider>

            <div className="p-10 w-full h-fit max-w-md lg:max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 h-full">
                    <DessertCatalogue />
                    <Cart />

                </div>
            </div>
        </CartContextProvider>
        {/* <div className="bg-red-500 h-20 w-full block" /> */}
    </StyleTokensSetup>
}

function StyleTokensSetup({ children }) {
    return <div
        className={`w-full text-(--rose-900) min-h-screen h-fit lg:pb-60 bg-(--rose-50) grid place-items-center ${redHatText.className}`}
        style={{
            "--red": "hsl(14,86%,42%)",
            "--green": "hsl(159, 69%, 38%)",
            "--rose-50": "hsl(20, 50%, 98%)",
            "--rose-100": "hsl(13, 31%, 94%)",
            "--rose-300": "hsl(14, 25%, 72%)",
            "--rose-400": "hsl(7, 20%, 60%)",
            "--rose-500": "hsl(12, 20%, 44%)",
            "--rose-900": "hsl(14, 65%, 9%)"
        }}>
        {children}
    </div>
}

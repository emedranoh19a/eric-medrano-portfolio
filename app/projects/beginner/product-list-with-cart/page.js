"use client"
import { Red_Hat_Text } from "next/font/google"
import { createContext, useState } from "react"
import Cart from "./components/Cart"
import DessertCatalogue from "./components/DessertCatalogue"
const redHatText = Red_Hat_Text({ subsets: ["latin"] })

export const CartContext = createContext(null)
// Users should be able to:

// - Add items to the cart and remove them
// - Increase/decrease the number of items in the cart
// - See an order confirmation modal when they click "Confirm Order"
// - Reset their selections when they click "Start New Order"
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

export default function Page() {
    //State:
    const [cartItems, setCartItems] = useState([])

    //Handlers:
    const handleAdd = (dessertId) => {
        const isInCart = cartItems.find((item) => item.id === dessertId)
        if (!isInCart) {
            setCartItems((prevItems) => [...prevItems, { id: dessertId, quantity: 1 }])
        } else {
            const newItems = cartItems.map((cartItem) => (cartItem.id === dessertId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
            setCartItems(newItems)
        }
    }
    const handleDelete = (dessertId) => {

        const isLastDessert = cartItems.find((item) => item.id === dessertId && item.quantity === 1)

        if (isLastDessert) {
            handleDeleteKind(dessertId)
        } else {
            const newItems = cartItems.map((cartItem) => (cartItem.id === dessertId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
            setCartItems(newItems)
        }
    }
    const handleDeleteKind = (dessertId) => {
        const newItems = cartItems.filter((item) => item.id !== dessertId)
        setCartItems(newItems)
    }

    return <StyleTokensSetup>
        <CartContext value={{ cartItems, setCartItems, handleAdd, handleDelete, handleDeleteKind }}>

            <div className="p-10 w-full h-fit max-w-md lg:max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 h-full">
                    <DessertCatalogue />
                    <Cart />

                </div>
            </div>
        </CartContext>
        {/* <div className="bg-red-500 h-20 w-full block" /> */}
    </StyleTokensSetup>
}

function StyleTokensSetup({ children }) {
    return <div
        className={`w-full text-[var(--rose-900)] min-h-screen h-fit lg:pb-60 bg-[var(--rose-50)] grid place-items-center ${redHatText.className}`}
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

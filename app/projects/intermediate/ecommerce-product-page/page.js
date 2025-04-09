import Navbar from "./components/Navbar"
import Product from "./components/Product"
import StylesSetup from "./components/StylesSetup"
//logo.svg
//image-avatar.png
export default function Page() {
    return <StylesSetup className="container mx-auto max-w-6xl flex flex-col pb-40">
        <Navbar />
        <Product />
    </StylesSetup>
}
//TODO:- View the optimal layout for the site depending on their device's screen size
//TODO:- See hover states for all interactive elements on the page
//TODO:- Open a lightbox gallery by clicking on the large product image
//TODO:- Switch the large product image by clicking on the small thumbnail images
//TODO:- Add items to the cart
//TODO:- View the cart and remove items from it





//_The challenge: 
// Users should be able to:

import StylesSetup from "./components/StylesSetup"

//TODO: - Fill in the form and see the card details update in real-time
//TODO: - Receive error messages when the form is submitted if:
//TODO:   - Any input field is empty
//TODO:   - The card number, expiry date, or CVC fields are in the wrong format
//TODO: - View the optimal layout depending on their device's screen size
//TODO: - See hover, active, and focus states for interactive elements on the page

export default function Page() {
    return <StylesSetup>
        {/* <div className="w-full h-full bg-red-500 flex"> */}
        <div className="flex-1 h-full block bg-red-100">hello Card</div>
        <div className="flex-1 bg-gray-300 h-full block">Form</div>
        {/* </div> */}
        {/* Cardholder Name
        e.g. Jane Appleseed

        Card Number
        e.g. 1234 5678 9123 0000

        Exp. Date (MM/YY)
        MM
        YY

        CVC
        e.g. 123

        Confirm


        Thank you!
        We've added your card details
        Continue */}

    </StylesSetup>
}

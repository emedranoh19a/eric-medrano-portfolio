import Button from "./components/Button"
import Input from "./components/Input"
import StyleSetup from "./components/StyleSetup"
import Text from "./components/Text"
import ThankYouCard from "./components/ThankYouCard"

export default function Page() {

    //TODO: - Complete the form with their details
    //TODO: - Receive form validation messages if:
    //TODO: - Any field is missed
    //TODO: - The email address is not formatted correctly
    //TODO: - The avatar upload is too big or the wrong image format
    //TODO: - Complete the form only using their keyboard
    //TODO: - Have inputs, form field hints, and error messages announced on their screen reader
    //TODO: - See the generated conference ticket when they successfully submit the form
    //TODO: - View the optimal layout for the interface depending on their device's screen size
    //TODO: - See hover and focus states for all interactive elements on the page

    return <StyleSetup>

        <Button />
        <Text preset={1}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={2}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={3}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={4}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={5}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={6}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={7}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Text preset={1}>There are more credit cards in heaven and earth than those dreamt of in your philosophy</Text>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <ThankYouCard />

        Your Journey to Coding Conf 2025 Starts Here!
        Secure your spot at next year's biggest coding conference.
        Upload Avatar
        Drag and drop or click to upload
        Upload your photo (JPG or PNG, max size: 500KB).
        Full Name
        Email Address
        example@email.com
        GitHub Username
        @yourusername
        Generate My Ticket
        Congrats, [NAME]! Your ticket is ready.
        We've emailed your ticket to EMAIL_ADDRESS and will send updates in the run up to the event.
        Coding Conf
        Jan 31, 2025 / Austin, TX
    </StyleSetup>
}

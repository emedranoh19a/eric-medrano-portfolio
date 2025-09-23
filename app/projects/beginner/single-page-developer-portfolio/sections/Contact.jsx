import Form from "../components/Form";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-0 grid grid-cols-1 gap-x-56 lg:grid-cols-2 pt-16 lg:pt-20"
    >
      <div className="-z-10 bg-(--dark-grey) absolute w-screen inset-y-0 left-1/2 -translate-x-1/2" />
      <FormContent />
      <Form />
      <hr className="text-(--grey) h-2 mt-20 sm:[92px] lg:col-span-2" />
      <Footer />
    </section>
  );
}

function FormContent() {
  return (
    <div className="relative mb-[50px] sm:mb-[48px] text-center lg:text-left sm:mx-[162px] lg:mx-0">
      <Subtitle text="Contact" className="mb-5  lg:mb-8" />
      <Text>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I&apos;ll get back to you as soon as possible.
      </Text>
    </div>
  );
}
//Form Content
//The form itself

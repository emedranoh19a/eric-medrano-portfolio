import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <section className="h-screen w-full grid grid-cols-2" id="contact">
      <ContactForm />
      <div className="bg-red-500"></div>
    </section>
  );
}

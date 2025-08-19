import clsx from "clsx";
import ContactFormProvider from "./ContactFormProvider";
import TextField from "./TextField";

export default function ContactForm() {
  const formClassName = clsx("grid grid-cols-2 gap-4");
  return (
    <ContactFormProvider className={formClassName}>
      <FormContent />
      <FormControls />
    </ContactFormProvider>
  );
}
function FormControls() {
  return (
    <>
      <TextField
        fieldName="firstName" //to register with hook form
        label="First Name" //in japanese
        placeholder="Eric" //an example of the expected input (太郎　舞神楽)
        className=""
      />
      <TextField
        fieldName="lastName" //to register with hook form
        label="Last Name" //in japanese
        placeholder="Medrano" //an example of the expected input (太郎　舞神楽)
        className=""
      />
      <TextField
        fieldName="organization" //to register with hook form
        label="Company/Organization" //an example of the expected input (太郎　舞神楽)
        placeholder="label" //in japanese
        className="col-span-2"
      />
      <TextField
        fieldName="email" //to register with hook form
        label="E-mail Address" //an example of the expected input (太郎　舞神楽)
        placeholder="your_name@example.com" //in japanese
        className="col-span-2"
      />
      <TextField
        fieldName="message" //to register with hook form
        label="Message" //in japanese
        placeholder="Her goes your message" //an example of the expected input (太郎　舞神楽)
        className="col-span-2"
        labelClassName=""
        as="textarea"
      />
    </>
  );
}
function FormContent() {
  return (
    <div className="col-span-2">
      <h2>Contact me</h2>
      <p>
        Whether you have questions or you would just like to say hello, contact
        me.
      </p>
    </div>
  );
}

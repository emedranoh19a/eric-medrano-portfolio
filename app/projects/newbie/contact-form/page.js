"use client"

import { FormProvider, useForm } from "react-hook-form"
import FieldGroup from "./FieldGroup"

function Grid({ children }) {
  return <div className="grid grid-cols-1 gap-5 py-4">{children}</div>
}

function Page() {
  //State
  const formMethods = useForm({ mode: "onChange" })
  const {
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = formMethods

  //   const [status, setStatus] = useState(null);
  //   const [error, setError] = useState(null);

  //Handlers
  //This function works on Netlify!
  const handleFormSubmit = async (event) => {
    event.preventDefault()

    trigger()

    if (Object.keys(errors).length > 0) {
      console.log("Errors!")
      console.log(errors)
      return
    }
    //1. Sending the request to netlify.
    //This works!
    // try {
    //   //   setStatus("pending");
    //   //   setError(null);
    //   const myForm = event.target;
    //   const formData = new FormData(myForm);
    //   //Production environment

    //   const res = await fetch("/__forms.html", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   });
    //   if (res.status === 200) {
    //     // setStatus("ok");
    //     console.log("form submitted");
    //   } else {
    //     console.log("Something happened!");
    //     // setStatus("error");
    //     // setError(`${res.status} ${res.statusText}`);
    //   }
    // } catch (e) {
    //   console.log(e);
    //   //   setStatus("error");
    //   //   setError(`${e}`);
    // }

  }


  return (
    <div className="w-screen h-screen bg-emerald-50 grid place-content-center">
      <div className="bg-white w-11/12  h-fit p-6">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleFormSubmit}
            name="contact-form"
          // method="POST"
          // data-netlify="true"
          // action="/"
          // id="contact-form"
          >
            {/* Note: value of the next input must match the form name */}
            <input type="hidden" name="form-name" value="contact-form" />
            <h1 className="text-emerald-950 text-3xl font-bold">Contact Us</h1>
            <Grid>
              <FieldGroup
                fieldName="firstName"
                label="First Name"
                validations={{ required: "this field is required" }}
              />
              <FieldGroup
                fieldName="lastName"
                label="Last Name"
                validations={{ required: "this field is required" }}
              />
              <FieldGroup
                fieldName="email"
                label="Email Address"
                validations={{ required: "this field is required" }}
              />
            </Grid>
            <button
              type="submit"
              //   onClick={onSubmit}
              className="w-full bg-emerald-800 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Page

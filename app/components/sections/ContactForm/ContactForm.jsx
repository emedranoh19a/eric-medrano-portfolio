import { FormProvider, useForm } from "react-hook-form";
import TextField from "./TextField";

export default function ContactForm() {
  const methods = useForm();
  function onSubmit() {
    console.log("submitting");
  }
  return (
    <FormProvider {...methods}>
      <div className="w-full h-full grid place-items-center p-14">
        <form
          handleSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 h-fit"
        >
          <div className="col-span-2">
            <h2>Contact me</h2>
            <p>
              Whether you have questions or you would just like to say hello,
              contact me.
            </p>
          </div>
          <TextField
            fieldName="firstName" //to register with hook form
            label="First Name" //in japanese
            placeholder="Eric" //an example of the expected input (太郎　舞神楽)
            validations // To let or not to let the submission.
            className=""
          />
          <TextField
            fieldName="lastName" //to register with hook form
            label="Last Name" //in japanese
            placeholder="Medrano" //an example of the expected input (太郎　舞神楽)
            validations // To let or not to let the submission.
            className=""
          />
          <TextField
            fieldName="organization" //to register with hook form
            label="Company/Organization" //an example of the expected input (太郎　舞神楽)
            placeholder="label" //in japanese
            validations // To let or not to let the submission.
            className="col-span-2"
          />
          <TextField
            fieldName="email" //to register with hook form
            label="E-mail Address" //an example of the expected input (太郎　舞神楽)
            placeholder="your_name@example.com" //in japanese
            validations // To let or not to let the submission.
            className="col-span-2"
          />
          <TextField
            fieldName="message" //to register with hook form
            label="Message" //in japanese
            placeholder="Her goes your message" //an example of the expected input (太郎　舞神楽)
            validations // To let or not to let the submission.
            className="col-span-2"
            labelClassName=""
            as="textarea"
          />
        </form>
      </div>
    </FormProvider>
  );
}

function FormContent() {
  return (
    <div>
      <div class="cm93c3RhcnQy bXhhdQ cDEw lg:cm93YXU lg:bWF4d3hs"></div>
      <h1 class="YmxvY2s YW50aWFsaWFzZWQ dHJhY2tpbmdub3JtYWw Zm9udHNhbnM dGV4dDV4bA Zm9udHNlbWlib2xk bGVhZGluZ3RpZ2h0 dGV4dGJsdWVncmF5OTAw bWI0">
        Contact us
      </h1>
      <p class="YmxvY2s YW50aWFsaWFzZWQ Zm9udHNhbnM dGV4dHhs Zm9udG5vcm1hbA bGVhZGluZ3JlbGF4ZWQ dGV4dGluaGVyaXQ bWIxNg !tw-text-gray-500">
        Whether you have questions or you would just like to say hello, contact
        us.
      </p>
      <form action="#">
        <div class="bWI0 Zw Z2FwNA lg:Z2NvbHMy">
          <TextField />
        </div>
        <div class="bWI0">
          <Input />
        </div>
        <div class="bWI0">
          <Input />
        </div>
        <div class="bWI0 aG1heA">
          <div class="cmVsYXRpdmU d2Z1bGw bWludw[200px]">
            <textarea
              name="message"
              class="cGVlcg d2Z1bGw aGZ1bGw bWluaA[100px] Ymd0cmFuc3BhcmVudA dGV4dGJsdWVncmF5NzAw Zm9udHNhbnM Zm9udG5vcm1hbA b3V0bGluZQ b3V0bGluZTA focus:b3V0bGluZTA cmVzaXpleQ disabled:YmdibHVlZ3JheTUw disabled:YjA disabled:cmVzaXplbm9uZQ dHJhbnNpdGlvbmFsbA placeholder-shown:tw-border placeholder-shown:tw-border-blue-gray-200 placeholder-shown:tw-border-t-blue-gray-200 Yg focus:YjI YnR0cmFuc3BhcmVudA focus:YnR0cmFuc3BhcmVudA dGV4dHNt cHgz cHkz cmRtZA YmJsdWVncmF5MjAw focus:YmdyYXk5MDA !resize-none"
              placeholder=" "
            />
            <label class="ZmxleA d2Z1bGw aGZ1bGw c2VsZWN0bm9uZQ cG9pbnRlcmV2ZW50c25vbmU YWJzb2x1dGU bGVmdDA Zm9udG5vcm1hbA peer-placeholder-shown:tw-text-blue-gray-500 bGVhZGluZ3RpZ2h0 peer-focus:tw-leading-tight peer-disabled:tw-text-transparent peer-disabled:tw-peer-placeholder-shown:tw-text-blue-gray-500 dHJhbnNpdGlvbmFsbA -tw-top-1.5 peer-placeholder-shown:tw-text-sm dGV4dA[11px] peer-focus:tw-text-[11px] before:tw-content[' '] before:tw-block before:tw-box-border before:tw-w-2.5 before:tw-h-1.5 before:tw-mt-[6.5px] before:tw-mr-1 peer-placeholder-shown:before:tw-border-transparent before:tw-rounded-tl-md before:tw-border-t peer-focus:before:tw-border-t-2 before:tw-border-l peer-focus:before:tw-border-l-2 before:tw-pointer-events-none before:tw-transition-all peer-disabled:before:tw-border-transparent after:tw-content[' '] after:tw-block after:tw-flex-grow after:tw-box-border after:tw-w-2.5 after:tw-h-1.5 after:tw-mt-[6.5px] after:tw-ml-1 peer-placeholder-shown:after:tw-border-transparent after:tw-rounded-tr-md after:tw-border-t peer-focus:after:tw-border-t-2 after:tw-border-r peer-focus:after:tw-border-r-2 after:tw-pointer-events-none after:tw-transition-all peer-disabled:after:tw-border-transparent peer-placeholder-shown:tw-leading-[4.1] dGV4dGJsdWVncmF5NDAw peer-focus:tw-text-gray-900 before:tw-border-blue-gray-200 peer-focus:before:!tw-border-gray-900 after:tw-border-blue-gray-200 peer-focus:after:!tw-border-gray-900">
              Message
            </label>
          </div>
        </div>
        <div class="aW5saW5lZmxleA aXRlbXNjdHI">
          <label
            class="cmVsYXRpdmU ZmxleA aXRlbXNjdHI Y3Vyc29ycG9pbnRlcg cDM cmRmdWxs -tw-ml-2.5"
            for=":R1ekm:"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <input
              type="checkbox"
              class="cGVlcg cmVsYXRpdmU YXBwZWFyYW5jZW5vbmU dzU aDU Yg cmRtZA YmJsdWVncmF5MjAw Y3Vyc29ycG9pbnRlcg dHJhbnNpdGlvbmFsbA before:tw-content[''] before:tw-block before:tw-bg-blue-gray-500 before:tw-w-12 before:tw-h-12 before:tw-rounded-full before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:-tw-translate-y-2/4 before:-tw-translate-x-2/4 before:tw-opacity-0 hover:before:tw-opacity-10 before:tw-transition-opacity checked:tw-bg-gray-900 checked:tw-border-gray-900 checked:before:tw-bg-gray-900"
              id=":R1ekm:"
            />
            <span class="dGV4dHdoaXRl YWJzb2x1dGU dG9wMi80 bGVmdDIvNA -tw-translate-y-2/4 -tw-translate-x-2/4 cG9pbnRlcmV2ZW50c25vbmU b3BhY2l0eTA peer-checked:tw-opacity-100 dHJhbnNpdGlvbm9wYWNpdHk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            class="dGV4dGdyYXk3MDA Zm9udGxpZ2h0 c2VsZWN0bm9uZQ Y3Vyc29ycG9pbnRlcg bXRweA"
            for=":R1ekm:"
          >
            <p class="YmxvY2s YW50aWFsaWFzZWQ Zm9udHNhbnM dGV4dGJhc2U Zm9udGxpZ2h0 bGVhZGluZ3JlbGF4ZWQ dGV4dGluaGVyaXQ Zm9udG5vcm1hbA !tw-text-gray-500">
              You agree to your friendly{" "}
              <a
                href="#"
                class="Zm9udG1lZGl1bQ dGV4dGdyYXk3MDA hover:dGV4dGdyYXk5MDA"
              >
                Privacy Policy
              </a>
              .
            </p>
          </label>
        </div>
        <button
          class="YWxpZ25taWRkbGU c2VsZWN0bm9uZQ Zm9udHNhbnM Zm9udGJvbGQ dGV4dGN0cg dXBwZXJjYXNl dHJhbnNpdGlvbmFsbA disabled:b3BhY2l0eTUw disabled:c2hhZG93bm9uZQ disabled:cG9pbnRlcmV2ZW50c25vbmU dGV4dHNt cHkz.5 cHg3 cmRsZw bg-gray-900 dGV4dHdoaXRl c2hhZG93bWQ c2hhZG93Z3JheTkwMC8xMA hover:c2hhZG93bGc hover:c2hhZG93Z3JheTkwMC8yMA focus:b3BhY2l0eQ[0.85] focus:c2hhZG93bm9uZQ active:b3BhY2l0eQ[0.85] active:c2hhZG93bm9uZQ YmdncmF5OTAw YmxvY2s d2Z1bGw bXQ2"
          type="button"
          style={{ position: "relative", overflow: "hidden" }}
        >
          send message
        </button>
      </form>
    </div>
  );
}
function Illustration() {
  return <div>Illustration</div>;
}

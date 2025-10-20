import Image from "next/image";
import { locate, ride, scooter } from "./imageIndex";

export default function Steps() {
  return (
    <section
      id="steps"
      className="relative -z-10 mb-30 md:mb-[145px] lg:mb-50 flex flex-col lg:flex-row gap-12 md:gap-10 lg:gap-[30px]"
    >
      <Step title="Locate with app" icon={locate}>
        Use the app to find the nearest scooter to you. We are continuously
        placing scooters in the areas with most demand, so one should never be
        too far away.
      </Step>

      <Step title="Pick your scooter" icon={scooter}>
        {" "}
        We show the most important info for the scooters closest to you. So you
        know how much charge they have left and can see roughly how much it will
        cost.
      </Step>
      <Step title="Enjoy the ride" icon={ride} line>
        {" "}
        Scan the QR code and the bike will unlock. Retract the cable lock, put
        on a helmet, and you&apos;re off! Always lock bikes away from walkways
        and accessibility ramps.
      </Step>
    </section>
  );
}

function Step({ icon, title, children, line }) {
  //Note: A fragment for the oranemental collision with other steps.
  //  z-index context conflict/
  return (
    <>
      <div className="flex mx-auto flex-col md:flex-row gap-6 md:gap-20 lg:gap-10 lg:flex-col items-center lg:items-start">
        <StepIcon icon={icon} line={line} />
        <StepContent title={title}>{children}</StepContent>
      </div>
    </>
  );
}
function StepIcon({ icon, line }) {
  return (
    <div
      className={`relative ${
        line ? "-z-10" : "z-0"
      } w-14 md:w-24 aspect-square rounded-full`}
    >
      {line && (
        <div className="hidden md:block bg-light-grey absolute w-[15px] h-screen lg:w-screen lg:h-[15px] bottom-0 right-1/2 translate-x-1/2 lg:bottom-1/2 lg:translate-x-0 lg:translate-y-1/2 lg:right-1/2" />
      )}
      <Image src={icon} alt="" fill className="object-cover" />
    </div>
  );
}
function StepContent({ title, children }) {
  return (
    <div className="text-center md:text-left md:max-w-[398px] lg:max-w-[350px]">
      <h3 className="preset-4 text-dark-navy mb-6 md:mb-[27px]">{title}</h3>
      <p className="preset-body text-dim-grey">{children}</p>
    </div>
  );
}

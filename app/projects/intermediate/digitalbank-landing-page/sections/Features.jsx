import Image from "next/image";
import {
  iconApi,
  iconBudgeting,
  iconOnboarding,
  iconOnline,
} from "../imageIndex";

const features = [
  {
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: iconOnline,
  },
  {
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: iconBudgeting,
  },
  {
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: iconOnboarding,
  },
  {
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: iconApi,
  },
];
export default function Features() {
  return (
    <section id="features" className="relative z-0 py-16 sm:py-20 lg:py-24 ">
      <div className="absolute h-full w-screen top-0 left-1/2 -translate-x-[50vw] bg-gray-100 -z-10" />
      <div className="mx-auto text-center mb-12 sm:max-w-[518px] lg:max-w-[625px]">
        <h2 className="preset-3 text-blue-950 mb-4">Why choose Digitalbank?</h2>
        <p className="preset-7 text-gray-600">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function Feature({ title, text, icon }) {
  return (
    <div className="text-center sm:text-left max-w-[327px] sm:max-w-none mx-auto">
      <div className="w-18 aspect-square relative mx-auto sm:mr-auto sm:ml-0 mb-10">
        <Image
          src={icon}
          alt={`${title} icon`}
          className="object-contain"
          fill
        />
      </div>
      <h3 className="preset-4 text-blue-950 mb-6">{title}</h3>
      <p className="preset-7-regular text-gray-600">{text}</p>{" "}
    </div>
  );
}

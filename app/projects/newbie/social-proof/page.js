import clsx from "clsx";
import Image from "next/image";
function IconStar() {
  return (
    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
        fill="#EF9546"
        fillRule="nonzero"
      />
    </svg>
  );
}
function StarRating({ text, className }) {
  ///this should align itself, or center itself
  return (
    <div
      className={clsx(
        "bg-purple-50 w-full h-20 rounded-xl text-center flex flex-col justify-center items-center",
        className
      )}
    >
      <div className="flex h-5 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} />
        ))}
      </div>
      <p className="text-purple-900 font-bold">Rated 5 Stars in {text}</p>
    </div>
  );
}
function TestimonialHeader({ img, name }) {
  return (
    <div className="flex  gap-5 justify-start items-center">
      <div className="relative w-10 aspect-square rounded-full overflow-hidden">
        <Image src={img} fill objectFit="cover" alt="" />
      </div>
      <div>
        <h4 className="text-white font-semibold">{name}</h4>
        <span className="text-purple-400">Verified Buyer</span>
      </div>
    </div>
  );
}
function Testimonial({ name, img, text, className }) {
  return (
    <div
      className={clsx(
        " py-8 px-8 bg-purple-950/80 rounded-lg h-fit lg:h-52",
        className
      )}
    >
      <TestimonialHeader name={name} img={img} />
      <p className="text-purple-50 text-sm leading-6 tracking-normal">{text}</p>
    </div>
  );
}
const testimonials = [
  {
    name: "Colton Smith",
    img: "/social-proof/images/image-colton.jpg",
    text: `"We needed the same printed design as the one we had ordered a week prior. Not only did they find the origin order, but we also received it in time. Excellent!"`,
    className: "",
  },
  {
    name: "Irene Roberts",
    img: "/social-proof/images/image-irene.jpg",
    text: `"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`,
    className: "lg:mt-4",
  },
  {
    name: "Anne Wallace",
    img: "/social-proof/images/image-anne.jpg",
    text: `"Put on order with this company and can only praise them for the very high standard. Will definitely use them again and recommendd them to everyone!"`,
    className: "lg:mt-8",
  },
];

function InformationBlock({ className }) {
  return (
    <div className={clsx("text-center", className)}>
      <h1 className="text-purple-900 font-bold text-3xl w-3/4 mx-auto mb-5">
        10,000+ of our users love our products.
      </h1>
      <p className="text-md px-3 text-purple-950 font-light leading-relaxed tracking-wide">
        We only Provide great products combined with excellent customer service.
        See what out satisfied customers are saying about our services.
      </p>
    </div>
  );
}
function RatingBlock({ className }) {
  return (
    <div className={clsx("flex flex-col gap-3 min-w-80", className)}>
      <StarRating text="Reviews" className="" />
      <StarRating text="Report Guru" className="lg:ml-8" />
      <StarRating text="BestTech" className="lg:ml-16" />
    </div>
  );
}
function TestimonialsBlock({ className }) {
  return (
    <div className={clsx("flex flex-col gap-3", className)}>
      {testimonials.map((testimonial, i) => (
        <Testimonial key={i} {...testimonial} />
      ))}
    </div>
  );
}
export default function Page() {
  const gridStyles = clsx(
    "py-14 h-fit grid grid-cols-1 px-4 gap-7",
    "lg:grid-cols-2 lg:place-items-center",
    ""
  );
  return (
    <div className="container mx-auto w-screen h-screen relative">
      <Image
        src="/social-proof/images/bg-pattern-bottom-mobile.svg"
        fill
        objectFit="cover"
        className="absolute -z-10"
      />
      <div className={gridStyles}>
        <InformationBlock />
        <RatingBlock />
        <TestimonialsBlock className="lg:col-start-1 lg:col-span-2 lg:flex-row items-stretch" />
      </div>
    </div>
  );
}

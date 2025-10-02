import Card from "../components/Card";
import {
  imageConfetti,
  imageCurrency,
  imagePlane,
  imageRestaurant,
} from "../imageIndex";

const articles = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    contentPreview:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    img: imageCurrency,
  },
  {
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    contentPreview:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    img: imageRestaurant,
  },
  {
    author: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    contentPreview:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    img: imagePlane,
  },
  {
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    contentPreview:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    img: imageConfetti,
  },
];
export default function Articles() {
  return (
    <div className="py-16 sm:py-20 lg:py-[83px]">
      <h2 className="preset-2 text-blue-950 mb-12 sm:mb-16 lg:mb-14">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

import { features } from "../data/data";

export default function Features() {
  return (
    <div>
      {features.map((feature, index) => (
        <Feature {...feature} key={index} />
      ))}
    </div>
  );
}

function Feature({ title, text, icon }) {
  return <div>Feature</div>;
}

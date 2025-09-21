import Button from "../../components/Button";

export default function AboutContent() {
  return (
    <div className="max-w-[540px] text-pretty">
      <h2 className="preset-2 text-[var(--neutral-900)] mb-5 lg:mb-8">
        I&apos;m Amy, and I&apos;d love to work on your next project
      </h2>
      <p className="preset-4 text-[var(--neutral-400)] mb-8">
        I love working with others to create beautiful design solutions.
        I&apos;ve designed everything from brand illustrations to complete
        mobile apps. I&apos;m also handy with a camera!
      </p>

      <Button
        text="Free Consultation"
        variant="red"
        className="mx-auto lg:mx-none"
      />
    </div>
  );
}

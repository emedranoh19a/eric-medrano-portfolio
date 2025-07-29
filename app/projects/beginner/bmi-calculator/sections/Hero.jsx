import Card from "../components/Card";
import MetricForm from "../components/MetricForm";

export default function Hero() {
  return (
    <header>
      <HeroContent />
      <Card>
        <MetricForm />
      </Card>
    </header>
  );
}

function HeroContent() {
  return (
    <div>
      Body Mass Index Calculator Better understand your weight in relation to
      your height using our body mass index (BM) calculator. While BMI is not
      the sole determinant of a healthy weight, it offers a valuable starting
      point to evaluate your overall health and well-being.
    </div>
  );
}

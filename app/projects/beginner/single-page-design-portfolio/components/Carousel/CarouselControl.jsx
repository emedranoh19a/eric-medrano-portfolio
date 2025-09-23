import Arrow from "../Arrow";

export default function CarouselControl({ type, title, handleClick, left }) {
  return <Arrow left={left} title={title} onClick={handleClick} />;
}

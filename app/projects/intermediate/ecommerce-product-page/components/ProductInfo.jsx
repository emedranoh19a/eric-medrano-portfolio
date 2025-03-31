export default function ProductInfo() {
  return (
    <div className="">
      <Description />
      <PriceDetails />
      <CartControls />
    </div>
  );
}

function Description() {
  return (
    <div>
      <span>Sneaker company</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        There low-profile sneakers are youur perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withsand everything
        the weather can offer.
      </p>
    </div>
  );
}
function PriceDetails() {
  //TODO
  return <div>Price details</div>;
}

function CartControls() {
  //TODO
  return <div>Cart controls</div>;
}

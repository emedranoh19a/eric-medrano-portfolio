const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between">
      <div className="bg-orange-200">Item: logo and menus</div>
      <div className="bg-orange-50">Item: cart and avatar</div>
    </nav>
  );
}

import ArrowRight from "./ArrowRight";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100">
      {/* Navbar */}
      <Logo />
      <ArrowRight />
    </div>
  );
}

export default Navbar;

import Image from "next/image";
import Logo from "../static/logo.png";
import Button from "./Button";

function Header() {
  return (
    <header className="flex justify-center items-center gap-10 p-5 bg-yellow-500">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-40 h-10 flex items-center flex-start cursor-pointer">
          <Image alt="Logo" src={Logo} className="w-full object-contain" />
        </div>
        <nav className="flex cursor-pointer items-center space-x-5">
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <Button>Get Started</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";
import Button from "./Button";

function Header() {
  const { handleUserAuth, currentUser } = useContext(MediumContext);

  return (
    <header className="flex justify-center items-center gap-10 p-5 bg-yellow-500">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-40 h-10 flex items-center flex-start cursor-pointer">
          <Image alt="Logo" src={Logo} className="w-full object-contain" />
        </div>
        {currentUser ? (
          <nav className="flex cursor-pointer items-center space-x-5">
            <button className="highlight-none">Our Story</button>
            <button className="highlight-none">Membership</button>
            <Button className="highlight-none">Write</Button>
            <Button className="highlight-none">Get Started</Button>
          </nav>
        ) : (
          <nav className="flex cursor-pointer items-center space-x-5">
            <button className="highlight-none">Our Story</button>
            <button className="highlight-none">Membership</button>
            <button className="highlight-none" onClick={handleUserAuth}>
              Sign in
            </button>
            <Button className="highlight-none">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

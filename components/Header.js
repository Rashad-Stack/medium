import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";
import Button from "./Button";
import CustomModal from "./CustomModal";

function Header() {
  const { handleUserAuth, currentUser } = useContext(MediumContext);

  return (
    <header className="flex justify-center items-center gap-10 p-5 bg-yellow-500">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-40 h-10 flex items-center flex-start cursor-pointer">
          <Image alt="Logo" src={Logo} className="w-full object-contain" />
        </div>
        {currentUser.length !== 0 ? (
          <nav className="flex cursor-pointer items-center space-x-5">
            <Link href={"ourStory"}>
              <a>Our Story</a>
            </Link>
            <Link href={"membership"}>
              <a>Membership</a>
            </Link>

            <Link href={"/?create=1"}>
              <a className="flex items-center justify-center text-sm bg-black text-white py-2 px-4 rounded-full">
                Write
              </a>
            </Link>

            <Button>
              <Link href={"getStarted"}>
                <a>Get Started</a>
              </Link>
            </Button>
          </nav>
        ) : (
          <nav className="flex cursor-pointer items-center space-x-5">
            <Link href={"ourStory"}>
              <a>Our Story</a>
            </Link>
            <Link href={"membership"}>
              <a>Membership</a>
            </Link>
            <Button onClick={handleUserAuth}>
              <a>Sign in</a>
            </Button>
            <Button>
              <Link href={"getStarted"}>
                <a>Get Started</a>
              </Link>
            </Button>
          </nav>
        )}
      </div>
      <CustomModal />
    </header>
  );
}

export default Header;

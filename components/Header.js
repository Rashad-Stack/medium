import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";
import Button from "./Button";
import CustomModal from "./CustomModal";

function Header({ bannerHeight }) {
  const { handleUserAuth, currentUser } = useContext(MediumContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!!currentUser && (
        <header
          className={`${
            bannerHeight >= scrollPosition ? "bg-medium" : "bg-white"
          }  border-b border-black sticky top-0 z-10 transition duration-700`}
        >
          <div className="container max-w-screen-xl mx-auto flex justify-between items-center gap-3 md:gap-10 py-5 px-3 md:px-10 ">
            <Link href="/">
              <a className="w-32 sm:w-40 h-10 flex items-center flex-start cursor-pointer">
                <Image
                  alt="Logo"
                  src={Logo}
                  className="w-full object-contain"
                />
              </a>
            </Link>
            <div className="flex flex-1 justify-end gap-5">
              <nav className="hidden md:flex cursor-pointer items-center space-x-5">
                <Link href={"ourStory"}>
                  <a>Our Story</a>
                </Link>
                <Link href={"membership"}>
                  <a>Membership</a>
                </Link>
                <Link href="/creator">
                  <a>Write</a>
                </Link>
              </nav>
              <nav className="hidden sm:flex items-center">
                <Link href="/signin">
                  <a className="hidden sm:grid" onClick={handleUserAuth}>
                    Sign in
                  </a>
                </Link>
              </nav>
            </div>
            <Button
              bgCol={
                bannerHeight >= scrollPosition ? "bg-black" : "bg-green-500"
              }
            >
              <Link href={"getStarted"}>
                <a>Get started</a>
              </Link>
            </Button>
          </div>

          <CustomModal />
        </header>
      )}
    </>
  );
}

export default Header;

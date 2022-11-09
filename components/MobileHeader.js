import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { MediumContext } from "../context/MediumContext";
import { SmallLogo } from "../static";
import Button from "./Button";

const MobileHeader = () => {
  const { ref } = useContext(MediumContext);

  return (
    <header
      ref={ref}
      className="grid md:hidden shadow-sm sticky top-0 z-20 bg-white"
    >
      <div className="container mx-auto flex justify-between py-3 ">
        <div className="w-16 h-10 flex items-center flex-start cursor-pointer">
          <Image
            width={100}
            height={100}
            alt="Logo"
            src={SmallLogo}
            className="w-full object-contain"
          />
        </div>
        <nav className="flex items-center gap-5">
          <Button>Get unlimited access</Button>
          <Link href="/">
            <a className="text-sm text-green-500">Open app</a>
          </Link>
          <Link href="me/notification">
            <a className="w-10 h-10 flex justify-center items-center border rounded-full">
              <AiOutlineBell size={20} />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { MediumContext } from "../context/MediumContext";
const BottomTab = () => {
  const { currentUser } = useContext(MediumContext);
  return (
    <nav className="block md:hidden w-full bg-white fixed bottom-0 shadow-t px-3">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <a className="font-bold block py-4 text-gray-400">
            <AiOutlineHome size={25} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="font-bold block py-4 text-gray-400">
            <AiOutlineSearch size={25} />
          </a>
        </Link>

        {currentUser.length !== 0 ? (
          <>
            {" "}
            <Link href={"/"}>
              <a className="font-bold block py-4 text-gray-400">
                <BiBookmarks size={25} />{" "}
              </a>
            </Link>
            <div className="w-8 h-8 rounded-full overflow-hidden place-items-center">
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL}`}
                className="object-cover"
                width={80}
                height={80}
              />
            </div>
          </>
        ) : (
          <Link href="m/signin">
            <a className="font-bold block py-4 text-gray-400">
              <AiOutlineUser size={25} />
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default BottomTab;

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { MediumContext } from "../context/MediumContext";
import SmallLogo from "../static/smallLogo.png";

function ReadersNav() {
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  return (
    <aside className="hidden md:flex w-20 h-screen justify-center bg-white py-5">
      <div className="fixed h-full flex flex-col justify-between items-center">
        <Link href="/">
          <a>
            <Image width={50} height={50} src={SmallLogo} />
          </a>
        </Link>
        <div className="flex flex-col justify-center gap-6 text-2xl text-neutral-500">
          <Link href={"/"}>
            <a>
              <HiOutlineHome />
            </a>
          </Link>
          <Link href="/me/notification">
            <a>
              <FiBell />
            </a>
          </Link>

          <Link href="/me/bookmark">
            <a>
              <BiBookBookmark />
            </a>
          </Link>
          <RiArticleLine />
          <span className="border-b" />

          <Link href={"new-story"}>
            <a>
              <BsPencilSquare />
            </a>
          </Link>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden place-items-center">
          {currentUser.length !== 0 && (
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL}`}
              className="object-cover"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </aside>
  );
}

export default ReadersNav;

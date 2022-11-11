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
import Button from "./Button";

function ReadersNav() {
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  return (
    <aside className="w-20 h-screen flex flex-col justify-between items-center bg-white sticky top-0 py-5 border-r">
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

        {currentUser.length !== 0 && (
          <Link href={"new-story"}>
            <a>
              <BsPencilSquare />
            </a>
          </Link>
        )}
      </div>

      {currentUser.length !== 0 ? (
        <div className="w-10 h-10 rounded-full overflow-hidden place-items-center">
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL}`}
            className="object-cover"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <Button onClick={handleUserAuth}>Login</Button>
      )}
    </aside>
  );
}

export default ReadersNav;

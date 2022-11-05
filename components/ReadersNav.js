import Image from "next/image";
import Link from "next/link";
import { BiBookBookmark } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import SmallLogo from "../static/smallLogo.png";
import Button from "./Button";

function ReadersNav({ currentUser, handleUserAuth }) {
  return (
    <aside className="w-20 h-screen flex flex-col justify-between items-center p-1">
      <Link href="/">
        <a>
          <div>
            <Image src={SmallLogo} />
          </div>
        </a>
      </Link>
      <div className="flex-1 flex flex-col justify-center gap-6 text-2xl text-neutral-500">
        <Link href={"/"}>
          <a>
            <HiOutlineHome />
          </a>
        </Link>
        <FiBell />
        <Link href="/bookmark">
          <a>
            <BiBookBookmark />
          </a>
        </Link>
        <RiArticleLine />
        <span className="border-b" />
        <Link href={`/?create=1`}>
          <a>
            <BsPencilSquare />
          </a>
        </Link>
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

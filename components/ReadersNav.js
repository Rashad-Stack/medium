import Image from "next/image";
import Link from "next/link";
import { BiBookBookmark } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import SmallLogo from "../static/smallLogo.png";
function ReadersNav() {
  return (
    <div className="w-20 h-screen flex flex-col justify-between items-center p-1">
      <Link href="/">
        <a>
          <div>
            <Image src={SmallLogo} />
          </div>
        </a>
      </Link>
      <div className="flex-1 flex flex-col justify-center gap-6 text-2xl text-neutral-500">
        <HiOutlineHome />
        <FiBell />
        <BiBookBookmark />
        <RiArticleLine />
        <BsPencilSquare />
      </div>
      <div className="">
        <Image className="" />
      </div>
    </div>
  );
}

export default ReadersNav;

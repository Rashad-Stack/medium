import Image from "next/image";
import Link from "next/link";
import { BiBookBookmark } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import ProfileIMage from "../static/rashad.jpg";
import SmallLogo from "../static/smallLogo.png";
function ReadersNav() {
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
        <HiOutlineHome />
        <FiBell />
        <BiBookBookmark />
        <RiArticleLine />
        <span className="border-b" />
        <BsPencilSquare />
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden place-items-center">
        <Image src={ProfileIMage} className="object-cover" />
      </div>
    </aside>
  );
}

export default ReadersNav;

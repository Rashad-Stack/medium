// import Image from "next/image";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { ProfileIMage } from "../static";
import Button from "./Button";
// import{MdMarkEmailUnread}from'react-icons/md'

function Recommendation() {
  return (
    <aside className="h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-8">
      <Button className="w-full">Get Unlimited access</Button>

      <form className="mt-8">
        <label className="flex items-center gap-2 h-10 border px-4 rounded-full">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-none border-none"
          />
        </label>
      </form>
      <div className="">
        <div className="h-20 w-20 rounded-full overflow-hidden">
          <Image src={ProfileIMage} width={100} height={100} />
        </div>
        <p className="font-semibold mb-1 mt-4">Rashad Stack</p>
        <p className="text-gray-500">1M Followers</p>
      </div>
    </aside>
  );
}

export default Recommendation;

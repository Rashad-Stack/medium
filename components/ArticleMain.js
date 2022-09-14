import Image from "next/image";
import { AiFillPayCircle } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { Banner, ProfileIMage } from "../static";

function ArticleMain() {
  return (
    <div className="flex items-center justify-center flex-[3] border-l border-r">
      <div className="h-screen w-full p-8">
        <div className="flex justify-between items-center mt-9 mb-5">
          <div className="flex gap-4">
            <div className="h-12 w-12 grid rounded-full overflow-hidden">
              <Image
                className="object-cover"
                src={ProfileIMage}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-semibold">Rashad Stack</p>

              <div className=" flex gap-1 text-gray-500 text-sm font-medium">
                <span>June • 15 • 7 min read</span>{" "}
                <span className=" flex items-center gap-1 text-green-700">
                  <AiFillPayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-gray-500 cursor-pointer">
            <IoLogoTwitter />
            <IoLogoFacebook />
            <IoLogoLinkedin />
            <HiOutlineLink />
            <span className="w-2" />
            <BiBookBookmark />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-72 w-full grid overflow-hidden mb-8">
            <Image
              className="object-cover"
              src={Banner}
              width={100}
              height={100}
            />
          </div>
          <h1 className="font-bold text-3xl">
            Apple's Next Big Thing: A Business Model Change
          </h1>
          <h4 className="font-medium font-mediumSerifItalic text-xl text-gray-500">
            <span className="block">Rashad Stack, June 15, 2022</span>
            <span className="block">
              Apple's Next Big Thing: A Business Model Change
            </span>
          </h4>
          <p className="font-medium font-mediumSerif text-xl text-gray-500">
            The past three Monday Notes (here, here and here) looked at possible
            candidates for Apple's NBT (Next Big Thing), a product category that
            could launch an iPhone-like growth wave now that the smartphone
            market approaches saturation. For perspective, 2021 iPhone revenue
            was $192B, more than half of Apple's total revenue of $366B, this
            from almost nothing ($123M) in 2007. And this doesn't count App
            Store revenue, mostly for iPhone apps. The numbers aren't directly
            disclosed but reliable sources estimate tens of billions of dollars
            in net revenue, the riches Apple gets to keep after paying
            developers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleMain;

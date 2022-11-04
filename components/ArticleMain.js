import Image from "next/image";
import { AiFillPayCircle } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { Banner } from "../static";
import ProfileIMage from "../static/rashad.jpg";

function ArticleMain({ post, author }) {
  console.log(post, author, "😆 😄");

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
              <p className="font-semibold">{author?.data?.name}</p>

              <div className=" flex gap-1 text-gray-500 text-sm font-medium">
                <span>
                  {new Date(post.data?.postedOn).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}{" "}
                  • {post.data?.postLength} min read
                </span>{" "}
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
          <h1 className="font-bold text-3xl">{post?.data?.title}</h1>
          <h4 className="font-medium font-mediumSerifItalic text-xl text-gray-500">
            <span className="block">
              {author?.data?.name},{" "}
              {new Date(post.data?.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="block">{post?.data?.brief}</span>
          </h4>
          <p className="font-medium font-mediumSerif text-xl text-gray-500">
            {post?.data?.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleMain;
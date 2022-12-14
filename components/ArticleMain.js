import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillPayCircle } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import ArticleFooter from "./ArticleFooter";
import Loader from "./Loader";

function ArticleMain({ heightRef, post }) {
  const [height, setHeight] = useState();

  useEffect(() => {
    setTimeout(() => {
      setHeight(heightRef.current.clientHeight);
    }, 100);
  });

  return (
    <div className="flex-1 pt-16 border-r border-l">
      {post.length !== 0 ? (
        <div key={post.id} className="w-full p-8">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-4">
              <div className="h-12 w-12 grid rounded-full overflow-hidden">
                <Image
                  className="object-cover"
                  src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.authorImage}`}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex gap-2 items-center">
                  {" "}
                  <p className="font-semibold">{post?.data?.author}</p>
                  <button className="block md:hidden text-white bg-green-400 px-2 text-sm rounded-full highlight-none">
                    Follow
                  </button>
                </div>

                <div className=" flex gap-1 text-gray-500 text-sm">
                  {new Date(post.data?.postedOn).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}{" "}
                  • {post.data?.postLength} min read{" "}
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
                src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.bannerImage}`}
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-bold text-3xl font-gt-super">
              {post?.data?.title}
            </h1>
            <h4 className="font-medium font-gt-super text-xl text-gray-500">
              <span className="block">
                {post?.data?.author},{" "}
                {new Date(post.data?.postedOn).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="block">{post?.data?.brief}</span>
            </h4>
            <p className="font-serif text-lg text-gray-400">
              {post?.data?.body}
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <ArticleFooter />
    </div>
  );
}

export default ArticleMain;

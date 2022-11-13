import Image from "next/image";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  CPLogo,
  JSLogo,
  ProfileIMage,
  ReplitLogo,
  TutorialImg,
} from "../static";
import SidebarSearchForm from "./SidebarSearchForm";
import UseFullLinks from "./UseFullLinks";

function Recommendation({ post }) {
  return (
    <aside className="hidden md:w-80 md:flex justify-center px-5">
      <div className="mt-5">
        <SidebarSearchForm />
        <div className="flex flex-col mt-10">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.authorImage}`}
              width={100}
              height={100}
            />
          </div>
          <p className="font-semibold mb-1 mt-4">{post?.data?.author}</p>
          <p className="text-gray-500">1M Followers</p>
          <div className="flex gap-2 my-4">
            <button className="bg-green-700 text-white rounded-full px-2 py-1 text-sm highlight-none">
              Follow
            </button>
            <button className="bg-green-700 text-white rounded-full px-2 py-1 text-sm highlight-none">
              <MdMarkEmailUnread />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="">More from medium</p>
          {recommendedPosts.map((recommendedPost, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex flex-[4] items-center justify-between cursor-pointer my-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden h-6 w-6">
                      <Image
                        src={recommendedPost.author.image}
                        width={100}
                        height={100}
                        className="object-content"
                      />
                    </div>
                    <p>{recommendedPost.author.name}</p>
                  </div>
                  <p className="font-bold">{recommendedPost.title}</p>
                </div>
              </div>
              <div
                className="flex flex-1 items-end justify-center
          h-16 w-16"
              >
                <Image
                  src={recommendedPost.image}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <UseFullLinks />
      </div>
    </aside>
  );
}

export default Recommendation;
const recommendedPosts = [
  {
    title: "What can you do with Replit?",
    image: ReplitLogo,
    author: {
      name: "Cleave Programmer",
      image: CPLogo,
    },
  },
  {
    title: "The Ultimate Javascript Course for Beginner by Cleaver Programmer",
    image: TutorialImg,
    author: {
      name: "Rashad Stack",
      image: ProfileIMage,
    },
  },
  {
    title: "How to Became a Developer in 2022?",
    image: JSLogo,
    author: {
      name: "Cleaver Programmer",
      image: CPLogo,
    },
  },
];

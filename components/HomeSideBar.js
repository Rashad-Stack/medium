import Image from "next/image";
import {
  CPLogo,
  JSLogo,
  ProfileIMage,
  ReplitLogo,
  TutorialImg,
} from "../static";
import SidebarSearchForm from "./SidebarSearchForm";
const HomeSideBar = () => {
  return (
    <aside className="md:w-72 lg:w-80 h-screen p-8 border-l">
      <SidebarSearchForm />

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
    </aside>
  );
};
export default HomeSideBar;
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

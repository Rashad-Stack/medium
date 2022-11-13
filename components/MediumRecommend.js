import Image from "next/image";
import Link from "next/link";
import { Author, Thumbnail } from "../static";
const MediumRecommend = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-6 mt-32">
      <h1 className="text-lg font-semibold font-soehne">
        Recommended from Medium
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {Posts.map((post) => (
          <Link key={post?.id} href="/?">
            <a>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={20}
                    height={20}
                    src={post?.profileImage}
                    className="object-cover rounded-full"
                  />
                  <p className="w-52 text-sm">
                    {post?.authorName} <span className="text-gray-400">in</span>{" "}
                    {post?.groupName}
                  </p>
                </div>
                <Image width={50} height={50} src={post?.bannerImage} />
              </div>
              <h1 className="w-48 h-32 text-md font-semibold overflow-hidden text-ellipsis">
                {post?.title}
              </h1>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MediumRecommend;

const Posts = [
  {
    id: 1,
    profileImage: Author,
    authorName: "Rashad Stack",
    groupName: "Entertainment",
    title: "Alpha Share: The Never-Ending Ticket Use Case",
    bannerImage: Thumbnail,
  },
];

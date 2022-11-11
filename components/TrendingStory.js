import Image from "next/image";
import Link from "next/link";
import { IoIosTrendingUp } from "react-icons/io";
import { CPLogo } from "../static";

const Data = [
  {
    id: 1,
    trendPosition: "01",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
  {
    id: 2,
    trendPosition: "02",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
  {
    id: 3,
    trendPosition: "03",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
  {
    id: 4,
    trendPosition: "04",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
  {
    id: 5,
    trendPosition: "05",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
  {
    id: 5,
    trendPosition: "06",
    profileImage: CPLogo,
    authorName: "Arthur Hayes",
    groupName: "Entrepreneur's Handbook",
    title: "Speechless",
    postedOn: "Nov 2",
    articleLength: 2,
  },
];

const TrendingStory = () => {
  return (
    <section id="trending" className="py-16 border-b">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-6 flex items-center justify-start border border-black rounded-full">
          <IoIosTrendingUp size={18} />
        </span>
        <h1 className="text-sm font-semibold uppercase font-soehne tracking-wide">
          Trending on medium
        </h1>
      </div>
      <div className="grid grid-cols-2">
        {Data.map((article) => (
          <Link href={`trending/${article.id}`}>
            <a>
              <div key={article.id} className="flex gap-3 items-start">
                <span className="text-gray-200 text-3xl font-extrabold font-soehne-bold tracking-wider flex items-start">
                  {article?.trendPosition}
                </span>
                <div className="flex flex-col gap-3 py-3">
                  <div className="flex items-center gap-3">
                    <Image width={20} height={20} src={article?.profileImage} />
                    <p className="text-sm font-soehne">
                      {article?.authorName}{" "}
                      <span className="text-gray-400">in</span>{" "}
                      {article?.groupName}
                    </p>
                  </div>
                  <h3 className="text-base font-soehne font-semibold tracking-wider">
                    {article?.title}
                  </h3>
                  <span className="flex items-center text-sm text-gray-500">
                    {article?.postedOn} · {article?.articleLength} min read
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingStory;

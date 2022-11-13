import { MdMarkEmailUnread } from "react-icons/md";
import Button from "./Button";
import MediumRecommend from "./MediumRecommend";
const ArticleFooter = () => {
  return (
    <div className="w-full bg-neutral-100 p-8 flex flex-col justify-center items-center gap-10">
      <div className="w-full flex justify-between items-start">
        <div className="">
          <h1 className="text-lg font-semibold font-soehne tracking-wide">
            More from Middle Seat Consulting
          </h1>
          <p className="text-sm text-gray-500 font-soehne leading-8">
            Digital media for progressive candidates and organizations.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-700 text-white rounded-full px-2 py-1 text-sm highlight-none">
            Follow
          </button>
          <button className="bg-green-700 text-white rounded-full px-2 py-1 text-sm highlight-none">
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <p className="text-md text-gray-700">
          Love podcasts or audiobooks? Learn on the go with our new app.
        </p>
        <Button>Try Knowledge</Button>
      </div>
      <MediumRecommend />
    </div>
  );
};

export default ArticleFooter;

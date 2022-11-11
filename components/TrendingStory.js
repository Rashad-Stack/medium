import { IoIosTrendingUp } from "react-icons/io";
const TrendingStory = () => {
  return (
    <section id="trending" className="py-16">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-6 flex items-center justify-start border border-black rounded-full">
          <IoIosTrendingUp size={18} />
        </span>
        <h1 className="text-sm font-semibold uppercase font-soehne tracking-wide">
          Trending on medium
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-3">
          <span className="text-gray-200 text-2xl font-extrabold font-soehne-bold tracking-wider">
            01
          </span>
          <div>
            <div className="flex"></div>
            <h3></h3>
            <span className="flex"></span>
          </div>
        </div>
        <div>hi</div>
      </div>
    </section>
  );
};

export default TrendingStory;

import { useEffect, useRef } from "react";
import BannerAnimation from "./BannerAnimation";
function Banner({ setBannerHeight }) {
  const height = useRef(null);

  useEffect(() => {
    setBannerHeight(height.current.clientHeight);
  }, []);
  return (
    <section
      ref={height}
      id="banner"
      className="flex items-center justify-between bg-medium border-b border-black"
    >
      <div className="container max-w-2xl mx-auto flex justify-start px-10">
        <div className="w-full space-y-10 py-8">
          <h1 className="text-6xl md:text-8xl font-gt-super">Stay curious.</h1>
          <h3 className="text-xl md:text-xl font-soehne">
            Discover stories, thinking, and expertise
            <br /> from writers on any topic.
          </h3>
          <button className="w-52 h-10 flex items-center justify-center text-md tracking-wider bg-black text-white font-semibold rounded-full highlight-none font-soehne transition duration-700 ">
            Start reading
          </button>
        </div>
      </div>
      <div className="hidden md:flex">
        <BannerAnimation />
      </div>
    </section>
  );
}

export default Banner;

import { useState } from "react";
import Banner from "./Banner";
import BlogPost from "./BlogPost";
import Header from "./Header";
import HomeSideBar from "./HomeSideBar";
import TrendingStory from "./TrendingStory";
const HomeStory = () => {
  const [bannerHeight, setBannerHeight] = useState();
  return (
    <section>
      <Header bannerHeight={bannerHeight} />
      <Banner setBannerHeight={setBannerHeight} />
      <TrendingStory />
      <div className="container max-w-screen-xl mx-auto px-10 my-16">
        <div className="flex gap-8">
          <BlogPost />
          <HomeSideBar />
        </div>
      </div>
    </section>
  );
};

export default HomeStory;

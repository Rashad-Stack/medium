import BlogPost from "./BlogPost";
import HomeSideBar from "./HomeSideBar";

const HomeStory = () => {
  return (
    <section>
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

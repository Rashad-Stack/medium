import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import BlogPost from "./BlogPost";
import BottomTab from "./BottomTab";
import Header from "./Header";
import HomeSideBar from "./HomeSideBar";
import ReadersNav from "./ReadersNav";
const HomeStory = () => {
  const { inView } = useContext(MediumContext);
  console.log(inView, "😻 🥪 ");
  return (
    <section className="home">
      <Header />
      <div className="container max-w-screen-lg mx-auto ">
        <div className="flex">
          <div className="w-20 hidden md:grid">
            {!inView && <ReadersNav sticky />}
          </div>

          <BlogPost />

          <div className="hidden md:grid w-32 lg:w-96 static">
            <HomeSideBar />
          </div>
        </div>
      </div>
      <BottomTab />
    </section>
  );
};

export default HomeStory;

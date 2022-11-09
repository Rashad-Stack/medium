import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import banner from "../static/banner.png";
import Button from "./Button";
function Banner() {
  const { ref, entry } = useContext(MediumContext);

  const scrollTop = () => {
    window.scroll({
      top: entry.boundingClientRect.height + 85,
      behavior: "smooth",
    });
    console.log("banner line 10 🧮 🧮 ", entry.boundingClientRect.height);
  };

  return (
    <section
      ref={ref}
      id="banner"
      className="h-max-[10rem] hidden md:flex items-center justify-center bg-yellow-500 border-y border-black"
    >
      <div className="max-w-7xl flex flex-1 justify-between items-center">
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-8xl font-mediumSerif">Stay Curious</h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <Button onClick={scrollTop}>Start Reading</Button>
        </div>

        <Image
          src={banner}
          className="hidden h-32 md:inline-flex object-contain flex-1"
          width={500}
          height={400}
        />
      </div>
    </section>
  );
}

export default Banner;

import BannerAnimation from "./BannerAnimation";
import Button from "./Button";
function Banner() {
  return (
    <section
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
          <Button className="w-48 py-5 text-xl">Start reading</Button>
        </div>
      </div>
      <div className="hidden md:flex">
        <BannerAnimation />
      </div>
    </section>
  );
}

export default Banner;

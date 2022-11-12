import Tags from "./Tags";
import UseFullLinks from "./UseFullLinks";

const HomeSideBar = () => {
  return (
    <aside className="hidden md:block w-1/2 sticky top-0">
      <div className="flex flex-col">
        <h3 className="text-sm font-soehne-bold tracking-wide">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </h3>
        <Tags />
        <UseFullLinks />
      </div>
    </aside>
  );
};
export default HomeSideBar;

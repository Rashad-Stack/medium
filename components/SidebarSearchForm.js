import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";
const SidebarSearchForm = () => {
  return (
    <div>
      <Button className="w-full">Get Unlimited access</Button>
      <form className="mt-8">
        <label className="flex items-center gap-2 h-10 border px-4 rounded-full">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-none border-none"
          />
        </label>
      </form>
    </div>
  );
};

export default SidebarSearchForm;

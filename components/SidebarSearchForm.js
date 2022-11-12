import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MediumContext } from "../context/MediumContext";
const SidebarSearchForm = () => {
  const { currentUser } = useContext(MediumContext);
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex items-center gap-3">
        <button className="w-full bg-black text-white py-2 rounded-full">
          Get Unlimited access
        </button>
        {currentUser.length === 0 && (
          <Link href="signing">
            <a className="w-16 text-sm text-green-400 font-soehne">Sign in</a>
          </Link>
        )}
      </div>
      <form className="mt-8">
        <label className="flex items-center gap-2 h-10 border px-4 rounded-full">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            value={value}
            className="w-full outline-none bg-none border-none"
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default SidebarSearchForm;

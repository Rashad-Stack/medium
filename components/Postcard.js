import Image from "next/image";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
import Logo from "../static/logo.png";
function Postcard() {
  return (
    <Link href={`post/${123}`}>
      <a>
        <div className="flex max-w-3xl h-40 items-center cursor-pointer">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="grid place-items-center rounded-full overflow-hidden h-6 w-6">
                <Image
                  src={Logo}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">Rashad Stack</p>
            </div>
            <h1 className="font-bold text-2xl">
              Memo To All Housekeeping, Kitchen, and Dining Room Staff At
              Mar-A-Lago
            </h1>
            <p className="text-gray-500">
              From “Pygmy Alien” to “Weather.com” Heights
            </p>
            <div className="flex items-center justify-between">
              <span className="my-2 text-sm flex items-center justify-between">
                Jun 15 · 5 min read ·
                <span className="bg-neutral-100 p-1 rounded-full">
                  productivity
                </span>
              </span>
              <button className="cursor-pointer highlight-none">
                <FiBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="w-32">
            <Image height={100} weight={100} src={Logo} />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Postcard;

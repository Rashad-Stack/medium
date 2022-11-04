import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { fireStore } from "../firebase";
import Logo from "../static/logo.png";
function Postcard({ post }) {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        (await getDoc(doc(fireStore, "users", post.data.author))).data()
      );
    };
    getAuthorData();
  }, []);

  return (
    <Link href={`post/${post?.id}`}>
      <a>
        <div className="flex max-w-3xl h-40 items-center cursor-pointer">
          <div className="w-96 flex flex-col mr-5">
            <div className="flex gap-4">
              <div className="grid place-items-center rounded-full overflow-hidden h-6 w-6">
                <Image
                  src={Logo}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">{authorData?.name}</p>
            </div>
            <h1 className="font-bold text-2xl">{post.data.title}</h1>
            <p className="text-gray-500">{post.data.brief}</p>
            <div className="flex items-center justify-between">
              <span className="my-2 text-sm flex items-center justify-between">
                {new Date(post.data.postedOn).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                • {post.data.postLength} min read •
                <span className="bg-neutral-100 p-1 rounded-full">
                  {post.data.category}
                </span>
              </span>
              <button className="cursor-pointer highlight-none">
                <FiBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              height={100}
              width={100}
              src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Postcard;

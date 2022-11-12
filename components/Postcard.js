import Image from "next/image";
import Link from "next/link";
import { MdOutlineBookmarkAdd } from "react-icons/md";
function Postcard({ post }) {
  return (
    <Link href={`post/${post?.id}`}>
      <a>
        <div className="w-full flex items-center justify-between gap-3">
          <div className="w-3/5 flex flex-col">
            <div className="flex gap-4">
              <div className="grid place-items-center rounded-full overflow-hidden h-6 w-6">
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.authorImage}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm truncate font-soehne">
                {post.data?.author}{" "}
                {post.data?.groupName && (
                  <span className="text-gray-400">in</span>
                )}{" "}
                {post.data?.groupName}
              </p>
            </div>
            <h1 className="font-bold text-md md:text-xl text-ellipsis	max-h-14 overflow-hidden">
              {post.data?.title}
            </h1>
            <p className="text-sm text-gray-500 text-ellipsis max-h-10 overflow-hidden">
              {post.data?.brief}
            </p>
            <div className="flex items-center justify-between">
              <span className="my-2 text-sm flex items-center justify-between">
                {new Date(post.data?.postedOn).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                • {post.data?.postLength} min read •
                <span className="hidden sm:block bg-neutral-100 p-1 rounded-full">
                  {post.data?.category}
                </span>
              </span>
              <button className="cursor-pointer highlight-none">
                <MdOutlineBookmarkAdd className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Image
            height={135}
            width={200}
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.bannerImage}`}
            className="object-cover"
          />
        </div>
      </a>
    </Link>
  );
}

export default Postcard;

import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MediumContext } from "../context/MediumContext";
import Loader from "./Loader";
import Postcard from "./Postcard";

function BlogPost() {
  const router = useRouter();
  const { posts, inView, entry } = useContext(MediumContext);
  console.log(entry, "🧮 🧮 🧮 ");

  return (
    <section className="blogPost">
      <div className="md:max-w-xl flex flex-col gap-10 ">
        <div className="h-16 sticky flex px-5 top-0  bg-white z-10">
          {!inView && (
            <div className="w-full flex items-center gap-5 border-b">
              <Link href="me/following/suggestion">
                <a className={`text-sm text-gray-600 hover:text-gray-800`}>
                  <AiOutlinePlus />
                </a>
              </Link>
              <Link href="posts">
                <a className="text-sm text-gray-600 hover:text-gray-800 py-5">
                  For You
                </a>
              </Link>
              <Link href="me/posts">
                <a className="text-sm text-gray-600 hover:text-gray-800 py-5">
                  Following
                </a>
              </Link>
            </div>
          )}
        </div>

        {!!posts.length ? (
          posts.map((post) => <Postcard post={post} key={post?.id} />)
        ) : (
          <div className="flex justify-center items-center my-32">
            <Loader />
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogPost;

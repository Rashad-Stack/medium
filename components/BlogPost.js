import { useRouter } from "next/router";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import BlogPostNave from "./BlogPostNave";
import Loader from "./Loader";
import Postcard from "./Postcard";

function BlogPost() {
  const router = useRouter();
  const { posts, inView, entry } = useContext(MediumContext);
  console.log(entry, "🧮 🧮 🧮 ");

  return (
    <section className="blogPost">
      <div className="sticky flex px-5 top-14 bg-white z-10">
        {!inView && <BlogPostNave />}
      </div>
      <div className=" md:max-w-xl flex flex-col gap-10 px-8">
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

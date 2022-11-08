import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Loader from "./Loader";
import Postcard from "./Postcard";
function BlogPost() {
  const { posts } = useContext(MediumContext);
  return (
    <section className="blogPost">
      <div className="flex justify-center">
        <div className="container max-w-7xl flex-1">
          <div className="flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            {!!posts.length ? (
              posts.map((post) => <Postcard post={post} key={post?.id} />)
            ) : (
              <div className="flex justify-center items-center my-32">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;

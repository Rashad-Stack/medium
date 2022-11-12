import { useRouter } from "next/router";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Loader from "./Loader";
import Postcard from "./Postcard";

function BlogPost() {
  const router = useRouter();
  const { posts } = useContext(MediumContext);

  return (
    <div id="blogs">
      <div className="flex flex-col gap-y-16">
        {!!posts.length ? (
          posts.map((post) => <Postcard post={post} key={post?.id} />)
        ) : (
          <div className="w-full flex justify-center items-center my-32">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPost;

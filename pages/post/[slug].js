import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ArticleMain, ReadersNav, Recommendation } from "../../components";
import { MediumContext } from "../../context/MediumContext";

function Post() {
  const { posts, currentUser, handleUserAuth } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Guard clause
    if (posts.length === 0) return;
    setPost(posts.find((post) => post.id === router.query?.slug));
  }, [posts]);

  return (
    <section>
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <ReadersNav />
          <ArticleMain post={post} />
          <Recommendation post={post} />
        </div>
      </div>
    </section>
  );
}

export default Post;
